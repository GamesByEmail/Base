import { Injectable, ViewContainerRef, ElementRef } from '@angular/core';
import { SvgDialogService } from '@packageforge/svg-dialog';
import { BeginningOfTurnDialogComponent } from './beginning-of-turn-dialog.component';
import { Territory } from '../../../../game/territory';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BeginningOfTurnDialogService {

  constructor(private svgDialogService: SvgDialogService) { }

  open(outlet: ViewContainerRef, mouse: ElementRef<SVGElement>, territoryObservable:Observable<Territory|undefined>) {
    return this.svgDialogService.follow<void>(outlet, mouse, BeginningOfTurnDialogComponent, territoryObservable);
  }
}
