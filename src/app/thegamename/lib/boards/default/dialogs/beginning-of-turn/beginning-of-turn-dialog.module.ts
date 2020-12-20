import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgDialogModule, SvgDialogService } from '@packageforge/svg-dialog';
import { TemplateProjectionModule } from '@packageforge/template-projection';
import { BeginningOfTurnDialogComponent } from './beginning-of-turn-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    TemplateProjectionModule,
    MatButtonModule,
    SvgDialogModule
  ],
  declarations: [
    BeginningOfTurnDialogComponent,
  ],
  entryComponents: [
    BeginningOfTurnDialogComponent,
  ],
  providers: [
    SvgDialogService
  ]
})
export class BeginningOfTurnDialogModule {}