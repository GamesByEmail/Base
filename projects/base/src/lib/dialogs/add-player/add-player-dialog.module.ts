import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DialogModule } from '../dialog.module';

import { AddPlayerDialog } from './add-player-dialog';
import { AddPlayerDialogComponent } from './add-player-dialog.component';

@NgModule({
  declarations: [
    AddPlayerDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    DialogModule
  ],
  providers: [
    AddPlayerDialog
  ],
  entryComponents: [
    AddPlayerDialogComponent
  ]
})
export class AddPlayerDialogModule {
}
