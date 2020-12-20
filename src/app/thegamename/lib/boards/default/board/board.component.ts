import { Component, Input, ElementRef, ViewChild, AfterViewInit, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { fromEvent, Subscription, Observable, Subject, race, BehaviorSubject } from 'rxjs';
import { switchMap, map, takeUntil } from 'rxjs/operators';
import { Point2D, Rectangle2D } from '@packageforge/geometry2d';

import { BoardService } from 'projects/base/src/public-api';

import { Territory } from '../../../game/territory';
import { Game } from '../../../game/game';
import { TeamId } from '../../../game/team-id';
import { Team } from '../../../game/team';
import { PopulateDialogService } from '../dialogs/populate/populate-dialog.service';
import { BeginningOfTurnDialogService } from '../dialogs/beginning-of-turn/beginning-of-turn-dialog.service';

@Component({
  selector: 'gamesbyemail-games-thegamename-default-board',
  templateUrl: './board.component.svg',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements AfterViewInit {
  @Input() game!: Game;
  @ViewChild('dialogArea', { read: ViewContainerRef }) dialogArea!: ViewContainerRef;
  @ViewChild('dialogOverlay', { read: ElementRef }) dialogOverlay!: ElementRef;
  @ViewChild('entireGame') entireGame!: ElementRef<SVGElement>;
  @ViewChild('boardArea') boardArea!: ElementRef<SVGElement>;
  @ViewChild('pieceLibrary') pieceLibrary!: any;

  mousemove: Observable<MouseEvent> = <any>fromEvent(document, 'mousemove');
  mouseup: Observable<any> = fromEvent(document, 'mouseup').pipe(map(() => undefined));
  territoryUp: Subject<Territory> = new Subject<Territory>();
  territoryOver: BehaviorSubject<Territory|undefined> = new BehaviorSubject<Territory|undefined>(undefined);

  viewBox: Rectangle2D=new Rectangle2D(0,0,946,554);
  constructor(private cd: ChangeDetectorRef, private boardService: BoardService
    ,private populate:PopulateDialogService
    ,private beginningOfTurn:BeginningOfTurnDialogService
    ) {
setTimeout(()=>{
  this.openBeginningOfTurn();
},1);
  }
  subscription!: Subscription;
  ngAfterViewInit() {
    this.game.board.controller = this;
    this.cd.detectChanges();
  }
  get perspectiveTeam() {
    return this.game.findTeam(this.game.perspective);
  }
  getTitleIndex(team: Team): number {
    return Object.values(TeamId).indexOf(team.id);
  }
  territoryClass(territory:Territory):any{
    const classes:any={
    };
    classes[territory.controllingId]=true;
    return classes;
  }
  territoryClick(territory:Territory,event:MouseEvent){
    this.populate.open(this.dialogArea,{territory:territory,pieceLibrary:this.pieceLibrary},this.dialogOverlay);
  }
  territoryEnter(territory:Territory,event:MouseEvent){
    this.territoryOver.next(territory);
  }
  territoryLeave(territory:Territory,event:MouseEvent){
    this.territoryOver.next(undefined);
  }
  openBeginningOfTurn(){
    this.beginningOfTurn.open(this.dialogArea,this.entireGame,this.territoryOver);
  }
}
