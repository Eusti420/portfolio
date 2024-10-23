import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { merge } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
        MatButtonModule, 
        MatListModule, 
        MatBottomSheetModule, 
        CommonModule, 
        MatFormFieldModule, 
        MatCheckboxModule, 
        MatIconModule, 
        MatInputModule, 
        FormsModule, 
        ReactiveFormsModule,
      ],

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  http = inject(HttpClient)

   contactData = {
      name: "",
      email: "",
      message: "",
      privacy: false
   }  

  mailTest = true;
    post = {
      endPoint: 'https://feusterholz.de/sendMail.php',
      body: (payload: any) => JSON.stringify(payload),
      options: {
        headers: {
          'Content-Type': 'text/plain',
          responseType: 'text',
        },
      },
    };


   onSubmit(ngForm: NgForm) {
    if (ngForm.valid) {
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "ac3726f5-9a6a-4de2-a318-940df3d95764",
          name: this.contactData.name,
          email: this.contactData.email,
          message: this.contactData.message,
        })
      })
        .then(async (response) => {
          let json = await response.json();
        })
        .catch(error => {
          console.log(error);
        })

      console.log('Form Submitted!', this.contactData);
      this.openBottomSheet();
      // this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe();
      ngForm.resetForm();
    }

    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.info('send post complete');
          }
    
          
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

    readonly email = new FormControl('', [Validators.required, Validators.email]);
    readonly message = new FormControl('', [Validators.required, Validators.minLength(5)]);
  
    errorMessage = '';
  
    constructor() {
      merge(
        this.email.statusChanges,
        this.message.statusChanges
      )
        .pipe(takeUntilDestroyed())
        .subscribe(() => this.updateErrorMessage());
    }
  
    updateErrorMessage() {
      if (this.email.hasError('required')) {
        this.errorMessage = 'You must enter an email address';
      } else if (this.email.hasError('email')) {
        this.errorMessage = 'Not a valid email';
      } else if (this.message.hasError('required')) {
        this.errorMessage = 'You must enter a message';
      } else if (this.message.hasError('minlength')) {
        this.errorMessage = 'Message must be at least 5 characters long';
      } else {
        this.errorMessage = '';
      }
    }

  private _bottomSheet = inject(MatBottomSheet);
  openBottomSheet(): void {
    console.log('openBottomSheet method called');
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
    <div>
      <p>Deine Anfrage wurde versendet.</p>
    </div>
  `,
})

export class BottomSheetOverviewExampleSheet {
  
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {
    setTimeout(() => {
      this._bottomSheetRef.dismiss();
    }, 3000);
  }

  close(): void {
    this._bottomSheetRef.dismiss();
  }
}