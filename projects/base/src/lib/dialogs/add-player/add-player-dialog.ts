import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { DialogService } from '../dialog.service';

import { AddPlayerDialogComponent } from './add-player-dialog.component';
import { IMe } from '../../interfaces/i-me';
import { IFriend } from '../../interfaces/i-friend';

/* This is the service used to open the dialog. */
@Injectable({
  providedIn: 'root'
})
export class AddPlayerDialog {

  constructor(private dialogService: DialogService, private dialog: MatDialog) {
  }
  
  /* This is the public method used to open the dialog with some data, and return some data when closed. */
  public open(me: IMe, positionNear?: HTMLElement): Observable<IFriend | undefined> {
    return this.dialog.open(AddPlayerDialogComponent, this.dialogService.createDialogConfig(me, 270, 280, positionNear)).afterClosed();
  }
  
}