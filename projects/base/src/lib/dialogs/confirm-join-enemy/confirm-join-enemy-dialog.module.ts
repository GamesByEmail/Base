import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogModule } from '../dialog.module';

import { ConfirmJoinEnemyDialog } from './confirm-join-enemy-dialog';
import { ConfirmJoinEnemyDialogComponent } from './confirm-join-enemy-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ConfirmJoinEnemyDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    DialogModule
  ],
  providers: [
    ConfirmJoinEnemyDialog
  ],
  entryComponents: [
    ConfirmJoinEnemyDialogComponent
  ]
})
export class ConfirmJoinEnemyDialogModule {
}
