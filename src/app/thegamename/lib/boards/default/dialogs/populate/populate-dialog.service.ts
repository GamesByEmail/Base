import { Injectable, ViewContainerRef, ElementRef } from '@angular/core';
import { SvgDialogService } from '@packageforge/svg-dialog';
import { PopulateDialogComponent } from './populate-dialog.component';
import { PieceChar } from '../../../../game/piece';
import { Territory } from '../../../../game/territory';


export interface IPopulateData {
  territory:Territory;
  pieceLibrary:any;
}

@Injectable({
  providedIn: 'root'
})
export class PopulateDialogService {

  constructor(private svgDialogService: SvgDialogService) { }

  open(outlet: ViewContainerRef, data: IPopulateData, overlay?: ElementRef<SVGElement>) {
    return this.svgDialogService.open<void>(outlet, PopulateDialogComponent, data, overlay);
  }
}
