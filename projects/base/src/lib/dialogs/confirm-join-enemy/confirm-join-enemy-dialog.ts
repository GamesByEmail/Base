import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { DialogService } from '../dialog.service';

import { ConfirmJoinEnemyDialogComponent, IConfirmJoinEnemyDialogData } from './confirm-join-enemy-dialog.component';

/* This is the service used to open the dialog. */
@Injectable({
  providedIn: 'root'
})
export class ConfirmJoinEnemyDialog {

  constructor(private dialogService: DialogService, private dialog: MatDialog) {
  }
  
  /* This is the public method used to open the dialog with some data, and return some data when closed. */
  public open(data: IConfirmJoinEnemyDialogData, positionNear?: HTMLElement): Observable<boolean | undefined> {
    return this.dialog.open(ConfirmJoinEnemyDialogComponent, this.dialogService.createDialogConfig(data, 400, undefined, positionNear)).afterClosed();
  }
  
}