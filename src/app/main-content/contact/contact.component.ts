import { Component, signal, inject } from '@angular/core';
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
/*   http = inject(HttpClient)
 */

   contactData = {
      name: "",
      email: "",
      message: "",
      privacy: false
   }  

  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }

  onSubmit() {

  }
};


