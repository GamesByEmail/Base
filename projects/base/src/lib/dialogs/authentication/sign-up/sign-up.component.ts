import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { AuthenticationDialogView } from '../authentication-dialog-view';
import { IAuthenticationDialogData } from '../i-authentication-dialog-data';
import { IAuthenticationDialogAction } from '../i-authentication-dialog-action';

import { IMe } from '../../../interfaces/i-me';

/* This is the dialog view component. */
@Component({
  selector: 'gamesbyemail-base-authentication-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {
  /* The initialization data is passed in as an input from the dialog template. */
  @Input() me!: IMe;
  @Input() data!: IAuthenticationDialogData;
  /* The event data is passed to the dialog template. */
  @Output('action') emitter = new EventEmitter<IAuthenticationDialogAction>();
  constructor() {
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  action(type:IAuthenticationDialogAction) {
    this.emitter.emit(type);
  }
}
