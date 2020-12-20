import { IBindableTarget, StateStore } from 'projects/base/src/public-api';
import { Game } from './game';
import { Territory } from './territory';
import { Team } from './team';
import { TeamId } from './team-id';
import { ElementRef } from '@angular/core';
import { Rectangle2D } from '@packageforge/geometry2d';
import { IProjectedEntity } from '@packageforge/template-projection';
import { IPieceKey } from './i-piece-key';

export enum PieceChar {
  Infantry = 'i',
  Armor = 'a',
  Fighter = 'f',
  Bomber = 'b',
  Transport = 'T',
  Submarine = 'S',
  Battleship = 'B',
  Carrier = 'C',
  Factory = 'F',
  AAGun = 'A'
}

export function teamIdFromChar(pieceChar: PieceChar): TeamId {
  return Object.values(TeamId).reduce((found: TeamId | undefined, id: TeamId) => found || (id.charAt(0).toLowerCase() === pieceChar ? id : undefined), undefined)!;
}

export interface IPieceSave {
  territory: number;
}

export abstract class Piece implements IProjectedEntity, IBindableTarget {
  abstract getChar(): PieceChar;

  public get game(): Game {
    return this._game;
  }
  private _team!: Team;
  public get team(): Team {
    return this._team;
  }
  private _territory: Territory | undefined;
  public get territory(): Territory | undefined {
    return this._territory;
  }
  public set territory(value: Territory | undefined) {
    if (this.elementRef)
      this.lastClientRect = new Rectangle2D(this.elementRef.nativeElement.getBoundingClientRect());
    this._territory = value;
  }
  public rolls:number[]=[];
  private stateStore = new StateStore<IPieceSave>();
  templateKey:IPieceKey;
  constructor(private _game: Game) {
    this.templateKey={
      unit:this.constructor.name,
      teamId:TeamId.Neutral,
      techTree:{}
    };
  }
  elementRef: ElementRef<SVGElement> | undefined;
  private lastClientRect: Rectangle2D | undefined;
  bindElement(elementRef: ElementRef<SVGElement>): Rectangle2D | undefined {
    if (this.elementRef && this.elementRef !== elementRef)
      this.unbindElement(this.elementRef);
    this.elementRef = elementRef;
    const r = this.lastClientRect;
    this.lastClientRect = undefined;
    return r;
  }
  unbindElement(elementRef: ElementRef<SVGElement>): void {
    if (this.elementRef === elementRef)
      this.elementRef = undefined;
  }
  getTemplateKey(key?: IPieceKey): IPieceKey {
    return this.templateKey;
  }
  canMove(): boolean {
    return this.team.myTurn;
  }
  save(): IPieceSave {
    const saved = this.saving();
    this.stateStore.push(saved);
    return saved;
  }
  saving(): IPieceSave {
    return {
      territory: this.territory ? this.territory.index : -1
    };
  }
  restore(depth: number) {
    const saved = this.stateStore.pop(depth);
    this.restoring(saved);
  }
  restoring(saved: IPieceSave | undefined) {
    this.territory = saved && saved.territory >= 0 ? this.team.game.board.territories[saved.territory] : undefined;
  }
  commit() {
    this.stateStore.commit();
  }
  setOwner(team:number | TeamId | Team){
    this._team = this.game.findTeam(team);
    this.templateKey.teamId=this.team.id;
    this.templateKey.techTree=this.team.techTree;
  }
  setState(state:string):string{
    this.setOwner(parseInt(state.charAt(0)));
    state=state.substr(1);
    this.rolls.length=0;
    while (state.search(/^\d/)===0) {
      this.rolls.push(parseInt(state.charAt(0)));
      state=state.substr(1);
    }
    return state;
  }
  getState():string{
    return this.getChar()+this.team.getIndex()+this.rolls.join();
  }
}
