import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgDialogModule, SvgDialogService } from '@packageforge/svg-dialog';
import { TemplateProjectionModule } from '@packageforge/template-projection';
import { PopulateDialogComponent } from './populate-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    TemplateProjectionModule,
    MatButtonModule,
    SvgDialogModule
  ],
  declarations: [
    PopulateDialogComponent,
  ],
  entryComponents: [
    PopulateDialogComponent,
  ],
  providers: [
    SvgDialogService
  ]
})
export class PopulateDialogModule {}