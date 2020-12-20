import { IBaseTerritorySave, BaseMapTerritory } from 'projects/base/src/public-api';
import { Game, IGameOptions, IGameState, IGameSave } from './game';
import { Board, IBoardSave } from './board';
import { Team, ITeamSave } from './team';
import { TeamId } from './team-id';
import { Move, IModMove } from './move';

import { Piece, PieceChar } from './piece';
import { ITerritoryData } from './territory-data';
import { Rectangle2D, Point2D } from '@packageforge/geometry2d';
import { Factory } from './pieces/factory';
import { AAGun } from './pieces/aagun';

export interface ITerritorySave extends IBaseTerritorySave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, Move, IModMove> {
  highlight: boolean;
  pieces: Piece[];
}

interface IPieceDisplay {
  piece: Piece;
  count: number;
  point: Point2D;
};
export class Territory extends BaseMapTerritory<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritoryData, ITerritorySave, Team, TeamId, ITeamSave, Move, IModMove> {
  viewBox: Rectangle2D = new Rectangle2D(0, 0, 946, 554);
  constructor(board: Board, index: number, data: ITerritoryData) {
    super(board, index, data);
  }
  polygon!: string;
  controllingPower: Team | undefined;
  isSeaZone!: boolean;
  data!: ITerritoryData;
  pieces: Piece[] = [];
  _displayPieces: IPieceDisplay[] | undefined;
  setData(data: ITerritoryData) {
    super.setData(data);
    this.polygon = data.polygon.toPoints();
    this.setControllingPower(data.originalPowerId);
    this.isSeaZone = data.originalPowerId === TeamId.SeaZone;
    this.data = data;
  }
  get controllingId(): TeamId {
    if (this.controllingPower)
      return this.controllingPower.id;
    if (this.isSeaZone)
      return TeamId.SeaZone;
    return TeamId.Neutral;
  }
  highlight: boolean = false;
  clearFlags(team?: Team): void {
    super.clearFlags(team);
    this.highlight = false;
  }
  setControllingPower(index: number): void
  setControllingPower(teamId: TeamId): void
  setControllingPower(team: Team): void
  setControllingPower(team: number | TeamId | Team): void {
    this.controllingPower = this.board.game.findTeam(team);
    this.pieces && this.pieces.forEach(piece => {
      if (piece instanceof Factory || piece instanceof AAGun)
        piece.setOwner(this.controllingPower!);
    });
    this._displayPieces = undefined;
  }

  setState(state: string): string {
    if (state.length > 0) {
      while (state.charAt(0) !== ' ') {
        let stateChar = state.charAt(0);
        state = state.substr(1);
        if (stateChar >= '0' && stateChar <= '4')
          this.setControllingPower(parseInt(stateChar));
        else {
          const piece = this.board.createPiece(<PieceChar>stateChar);
          this.addPiece(piece);
          state = piece.setState(state);
        }
      }
      state = state.substr(1);
    }
    return state;
  }
  getState(): string {
    let state = "";
    if (this.controllingId !== this.data.originalPowerId)
      state += this.controllingPower!.getIndex();
    this.pieces.forEach(piece => state += piece.getState());
    state += " ";
    return state;
  }
  save() {
    super.save();
    this.pieces.forEach(piece => piece.save());
  }
  saving(): ITerritorySave {
    const saving = super.saving();
    saving.highlight = this.highlight;
    saving.pieces = this.pieces;
    return saving;
  }
  restore(depth: number) {
    super.restore(depth);
    this.pieces.forEach(piece => piece.restore(depth));
  }
  restoring(saved: ITerritorySave) {
    super.restoring(saved);
    this.highlight = saved.highlight;
    this.pieces = saved.pieces;
  }
  commit() {
    super.commit();
    this.pieces.forEach(piece => piece.commit());
  }
  beginningMove() {
    super.beginningMove();
  }
  removePiece(piece: Piece) {
    const index = this.pieces.indexOf(piece);
    if (index < 0)
      throw 'Piece not in territory';
    this.pieces.splice(index, 1);
    piece.territory = undefined;
    this._displayPieces = undefined;
  }
  addPiece(piece: Piece) {
    if (piece.territory)
      piece.territory.removePiece(piece);
    this.pieces.push(piece);
    piece.territory = this;
    this._displayPieces = undefined;
  }
  getDisplayTeamOrder(): Team[] {
    const friendly: Team[] = [];
    const hostile: Team[] = [];
    if (this.controllingPower)
      friendly.push(this.controllingPower);
    else
      friendly.push(this.pieces[0].team);
    this.pieces.forEach(piece => {
      const a = friendly[0].isFriendly(piece.team) ? friendly : hostile;
      if (a.indexOf(piece.team) < 0)
        a.push(piece.team);
    });
    return friendly.concat(hostile);
  }
  get displayPieces(): IPieceDisplay[] {
    if (!this._displayPieces) {
      this._displayPieces = [];
      if (this.pieces.length > 0) {
        const pieceChars: PieceChar[] = Object.values(PieceChar);
        const teams = this.getDisplayTeamOrder();
        for (let p = 0; p < pieceChars.length; p++) {
          const pieceChar = pieceChars[p];
          let point = <Point2D | undefined>(<any>this.data.musters)[pieceChar];
          if (!point)
            continue;
          const offset = <Point2D | undefined>(<any>this.data.musters)[pieceChar + "_"];
          for (let t = 0; t < teams.length; t++) {
            const displayPiece = this.findDisplayPiece(pieceChar, teams[t]);
            if (displayPiece) {
              this._displayPieces.push({
                piece: displayPiece.piece,
                count: displayPiece.count,
                point: point
              });
              if (offset)
                point = point.clone().add(offset);
              else
                break;
            }
          }
        }
      }
    }
    return this._displayPieces;
  }
  findDisplayPiece(pieceChar: PieceChar, team: Team): {piece:Piece,count:number} | undefined {
    let display;
    for (let i = 0; i < this.pieces.length; i++) {
      const piece = this.pieces[i];
      if (piece.getChar() === pieceChar && piece.team === team)
        if (display)
          display.count++;
        else
          display={
            piece:piece,
            count:1
          };
    }
    return display;
  }
}
