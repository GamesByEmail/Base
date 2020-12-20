

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { OptionTitleComponent } from './option-title.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    OptionTitleComponent
  ],
  exports: [
    OptionTitleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule
  ]
})
export class OptionTitleModule {
}
