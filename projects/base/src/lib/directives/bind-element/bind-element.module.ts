import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindElementDirective } from './bind-element.directive';
import { BoardService } from '../../services/board/board.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BindElementDirective],
  exports: [BindElementDirective],
  providers:[BoardService]
})
export class BindElementModule { }
