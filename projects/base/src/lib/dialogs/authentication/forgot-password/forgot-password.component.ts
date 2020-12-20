import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';

import { DialogService } from '../../dialog.service';

import { AuthenticationDialogView } from '../authentication-dialog-view';
import { IAuthenticationDialogData } from '../i-authentication-dialog-data';
import { IAuthenticationDialogAction } from '../i-authentication-dialog-action';

import { IMe } from '../../../interfaces/i-me';

/* This is the dialog view component. */
@Component({
  selector: 'gamesbyemail-base-authentication-forgotpassword',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  /* The initialization data is passed in as an input from the dialog template. */
  @Input() me!: IMe;
  @Input() data!: IAuthenticationDialogData;
  /* The event data is passed to the dialog template. */
  @Output('action') emitter = new EventEmitter<IAuthenticationDialogAction>();
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogService: DialogService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [this.data.email, [Validators.required, Validators.email]],
      password: [this.data.password, [Validators.required]],
      rememberMe: [this.data.rememberMe, []]
    });
  }
  ngOnDestroy() {
  }
  action(type: IAuthenticationDialogAction) {
    this.emitter.emit(type);
  }
  hasError(controlNames: string, validatorName?: string | undefined, force?: boolean): boolean {
    return this.dialogService.formHasError(this.form, controlNames, validatorName, force);
  }
}
