import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
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
        RouterModule
      ],

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  http = inject(HttpClient);
  private _bottomSheet = inject(MatBottomSheet);

  name = new FormControl('', [Validators.required, Validators.minLength(2)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.required, Validators.minLength(5)]);
  contactData = {
    privacy: false,
    name: '',
    email: '',
    message: ''
  };
  
  errorMessage = '';
  checkboxErrorMessage = '';

  constructor() {
    merge(this.name.statusChanges, this.email.statusChanges, this.message.statusChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.name.hasError('required')) {
      this.errorMessage = 'Name is required';
    } else if (this.name.hasError('minlength')) {
      this.errorMessage = 'Name must be at least 2 characters long';
    } else if (this.email.hasError('required')) {
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

  checkPrivacyPolicy() {
    // Diese Methode zeigt eine Fehlermeldung an, wenn alle Felder gültig sind, aber die Checkbox noch nicht ausgewählt ist
    if (this.name.valid && this.email.valid && this.message.valid && !this.contactData.privacy) {
      this.checkboxErrorMessage = 'Please agree to the privacy policy before submitting';
    } else {
      this.checkboxErrorMessage = '';
    }
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && this.contactData.privacy) {
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "ac3726f5-9a6a-4de2-a318-940df3d95764",
          name: this.name.value,
          email: this.email.value,
          message: this.message.value,
        })
      })
        .then(async (response) => {
          const json = await response.json();
          console.log(json);
        })
        .catch(error => {
          console.log(error);
        });

      console.log('Form Submitted!', this.contactData);
      this.openBottomSheet();
      ngForm.resetForm(); // Reset Form after submission
      this.contactData = { privacy: false, name: '', email: '', message: '' }; // Reset data values
    }
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `<div><p>Deine Anfrage wurde versendet.</p></div>`,
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {
    setTimeout(() => this._bottomSheetRef.dismiss(), 3000);
  }
}