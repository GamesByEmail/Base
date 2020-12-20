import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trigger, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';

import { GameFormService } from '../../services/game-form/game-form.service';
import { IMe } from '../../interfaces/i-me';

import { IAuthenticationDialogData } from './i-authentication-dialog-data';
import { IAuthenticationDialogAction } from './i-authentication-dialog-action';

import { AuthenticationDialogView } from './authentication-dialog-view';
import { IViewAndData } from './i-view-and-data';

/* The dialog component. This orchestrates the views and handles view action events. */
@Component({
  templateUrl: './authentication-dialog.component.html',
  styleUrls: ['./authentication-dialog.component.css'],
  animations: [
    trigger(
      'spinnerTransition', [
        transition(':enter', [
          style({ transform: 'scale(0)', opacity: 0 }),
          animate('150ms', style({ transform: 'scale(1)', opacity: 1 }))
        ]),
        transition(':leave', [
          animate('150ms', style({ transform: 'scale(0)', opacity: 0 }))
        ])
      ]
    )
  ]
})
export class AuthenticationDialogComponent implements OnInit, OnDestroy {

  /* The current view. */
  view: AuthenticationDialogView;
  /* The data passed in when opened. */
  me: IMe;
  data: IAuthenticationDialogData = { email: "A@B", password: "C", rememberMe: true };
  serviceSubscription: Subscription | undefined;
  serviceError: string | undefined;

  /* The constructor gets the dialog reference and initialzes the view and its data. */
  constructor(public dialogRef: MatDialogRef<AuthenticationDialogComponent>, @Inject(MAT_DIALOG_DATA) viewAndData: IViewAndData, private gameFormService: GameFormService) {
    this.view = (<IViewAndData>viewAndData).view;
    this.me = (<IViewAndData>viewAndData).me;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  /* Closes the dialog, returning some data from a view. */
  close(response?: IMe | undefined): void {
    this.dialogRef.close(response);
  }

  logIn(): void {
    this.data.status = "LOGGING_IN";
    this.serviceSubscription = this.gameFormService.signIn(this.data.email, this.data.password).subscribe((me: IMe): void => {
      this.serviceSubscription = undefined;
      this.data.status = "SUCCESS";
      this.me.id = me.id;
      this.me.name = me.name;
      this.me.handle = me.handle;
      this.me.friends = me.friends;
      this.me.enemies = me.enemies;
      this.close(this.me);
    }, (signInError: string): void => {
      this.serviceSubscription = undefined;
      this.data.status = "ERROR";
      this.serviceError = this.data.error = signInError;
    });
  }
  signUp(): void {
    alert("sending");
  }
  forgotPassword(): void {
    alert("sending");
  }
  enterCode(): void {
    alert("sending");
  }
  getHelp(): void {
    alert("sending");
  }
  action(type: IAuthenticationDialogAction) {
    switch (type) {
      case 'CANCEL':
        this.close();
        break;
      case 'VIEW_LOG_IN':
        this.view = 'LOG_IN';
        break;
      case 'VIEW_SIGN_UP':
        this.view = 'SIGN_UP';
        break;
      case 'VIEW_FORGOT_PASSWORD':
        this.view = 'FORGOT_PASSWORD';
        break;
      case 'VIEW_ENTER_CODE':
        this.view = 'ENTER_CODE';
        break;
      case 'VIEW_GET_HELP':
        this.view = 'GET_HELP';
        break;
      case 'SUBMIT_LOG_IN':
        this.logIn();
        break;
      case 'SUBMIT_SIGN_UP':
        this.signUp();
        break;
      case 'SUBMIT_FORGOT_PASSWORD':
        this.forgotPassword();
        break;
      case 'SUBMIT_ENTER_CODE':
        this.enterCode();
        break;
      case 'SUBMIT_GET_HELP':
        this.getHelp();
        break;
    }
  }
}