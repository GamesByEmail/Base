import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateProjectionModule } from '@packageforge/template-projection';

import { BindElementModule, BoardService } from 'projects/base/src/public-api';

import { BoardComponent } from './board/board.component';
import { LogComponent } from './log/log.component';
import { PiecesComponent } from './pieces/pieces.component';
import { EntriesComponent } from './log/entries/entries.component';
import { PopulateDialogModule } from './dialogs/populate/populate-dialog.module';
import { BeginningOfTurnDialogModule } from './dialogs/beginning-of-turn/beginning-of-turn-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    TemplateProjectionModule,
    BindElementModule,
    PopulateDialogModule,
    BeginningOfTurnDialogModule
  ],
  declarations: [
    BoardComponent,
    LogComponent,
    PiecesComponent,
    EntriesComponent
  ],
  exports: [
    BoardComponent,
    LogComponent,
    PiecesComponent
  ],
  providers: [
    BoardService
  ]
})
export class BoardModule {
}
