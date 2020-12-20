import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { SvgDialogRef, SVG_DIALOG_DATA } from '@packageforge/svg-dialog';
import { Territory } from '../../../../game/territory';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: "svg[gbe-games-chess-beginningofturn-dialog][xmlns=http://www.w3.org/2000/svg]",
  templateUrl: './beginning-of-turn-dialog.component.html',
  styleUrls: ['./beginning-of-turn-dialog.component.css']
})
export class BeginningOfTurnDialogComponent implements OnDestroy {
  pieceLibrary: any;
  territory:Territory|undefined;
  private sub:Subscription;
  constructor(public dialogRef: SvgDialogRef<void>, @Inject(SVG_DIALOG_DATA) territoryObservable:Observable<Territory|undefined>) {
    this.sub=territoryObservable.subscribe(territory=>{
      this.territory=territory;
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  close() {
    this.dialogRef.close();
  }
  dialogSize = {
    width: 300,
    height: 100
  };
}
