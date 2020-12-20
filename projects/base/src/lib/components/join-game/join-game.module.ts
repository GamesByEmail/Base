import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { JoinGameComponent } from './join-game.component';
import { ConfirmJoinEnemyDialogModule } from '../../dialogs/confirm-join-enemy/confirm-join-enemy-dialog.module';

import { OptionTitleModule } from '../option-title/option-title.module';
import { IconModule } from '../../modules/icon.module';

@NgModule({
  declarations: [
    JoinGameComponent
  ],
  exports: [
    JoinGameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    OptionTitleModule,
    IconModule,
    ConfirmJoinEnemyDialogModule
  ]
})
export class JoinGameModule {
}
