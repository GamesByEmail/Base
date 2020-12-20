import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/* This is the open dialog parameter interface. */

import {IEnemyEntry} from './i-enemy-entry';

export interface IConfirmJoinEnemyDialogData {
  enemies:IEnemyEntry[]
}

/* This is the close dialog component. */
@Component({
  templateUrl: './confirm-join-enemy-dialog.component.html',
  styleUrls: ['./confirm-join-enemy-dialog.component.css']
})
export class ConfirmJoinEnemyDialogComponent implements OnInit, OnDestroy {

  /* The constructor gets the dialog reference and gets the open parameter data. */
  constructor(public dialogRef: MatDialogRef<ConfirmJoinEnemyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: IConfirmJoinEnemyDialogData) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  /* This method closes the dialog, returning a response. */
  close(response?: boolean | undefined): void {
    this.dialogRef.close(response);
  }
  
}