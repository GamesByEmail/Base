import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ChoosePlayerComponent } from './choose-player.component';

import { OptionTitleModule } from '../option-title/option-title.module';
import { IconModule } from '../../modules/icon.module';

@NgModule({
  declarations: [
    ChoosePlayerComponent
  ],
  exports: [
    ChoosePlayerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    OptionTitleModule,
    IconModule
  ]
})
export class ChoosePlayerModule {
}
