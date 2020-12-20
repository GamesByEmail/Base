import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { DialogModule } from '../dialog.module';

import { AuthenticationDialog } from './authentication-dialog';
import { AuthenticationDialogComponent } from './authentication-dialog.component';
import { LogInComponent } from './log-in/log-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GetHelpComponent } from './get-help/get-help.component';

@NgModule({
  declarations: [
    LogInComponent,
    ForgotPasswordComponent,
    EnterCodeComponent,
    SignUpComponent,
    GetHelpComponent,
    AuthenticationDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    DialogModule
  ],
  providers: [
    AuthenticationDialog
  ],
  entryComponents: [
    AuthenticationDialogComponent
  ]
})
export class AuthenticationDialogModule {
}
