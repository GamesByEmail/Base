import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { DialogService } from '../dialog.service';
import { IMe } from '../../interfaces/i-me';

import { AuthenticationDialogView } from './authentication-dialog-view';
import { AuthenticationDialogComponent } from './authentication-dialog.component';
import { IViewAndData } from './i-view-and-data';

/* This is the service used to open the dialog to a view. */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationDialog {

  constructor(private dialogService: DialogService, private dialog: MatDialog) {
  }

  /* This does the actual opening based on the view method used below. */
  public open<T>(view: AuthenticationDialogView, me: IMe, positionNear?: HTMLElement): Observable<T> {
    const viewAndData: IViewAndData = { view: view, me: me };
    return this.dialog.open(AuthenticationDialogComponent, this.dialogService.createDialogConfig(viewAndData, 350, 370, positionNear)).afterClosed();
  }

  /* These are the public methods used to open the dialog to a particular view, and return some data when closed. */
  public openLogIn(me: IMe, positionNear?: HTMLElement): Observable<IMe | undefined> {
    return this.open<IMe | undefined>('LOG_IN', me, positionNear);
  }
  public openForgotPassword(me: IMe, positionNear?: HTMLElement): Observable<IMe | undefined> {
    return this.open<IMe | undefined>('FORGOT_PASSWORD', me, positionNear);
  }
  public openEnterCode(me: IMe, positionNear?: HTMLElement): Observable<IMe | undefined> {
    return this.open<IMe | undefined>('ENTER_CODE', me, positionNear);
  }
  public openSignUp(me: IMe, positionNear?: HTMLElement): Observable<IMe | undefined> {
    return this.open<IMe | undefined>('SIGN_UP', me, positionNear);
  }
  public openGetHelp(me: IMe, positionNear?: HTMLElement): Observable<IMe | undefined> {
    return this.open<IMe | undefined>('GET_HELP', me, positionNear);
  }

}