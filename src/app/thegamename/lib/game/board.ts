import { IPoint2D } from '@packageforge/geometry2d';
import { BaseMapBoard, IBaseBoardSave, HexHelper } from 'projects/base/src/public-api';
import { Game, IGameOptions, IGameState, IGameSave } from './game';
import { Team, ITeamSave } from './team';
import { Territory, ITerritorySave } from './territory';
import { TeamId } from './team-id';
import { Move, IModMove } from './move';
import { Piece, PieceChar } from './piece';
import { ITerritoryData, territoryData } from './territory-data';
import { createPiece } from './create-piece';

export interface IBoardSave extends IBaseBoardSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, Move, IModMove> {
}
export class Board extends BaseMapBoard<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritoryData, ITerritorySave, Team, TeamId, ITeamSave, Move, IModMove>  {
  public controller: any;
  constructor(game: Game) {
    super(game,territoryData);
  }
  createTerritory(index: number, data: ITerritoryData): Territory {
    return new Territory(this,index,data);
  }
  createPiece(state: PieceChar | string): Piece {
    return createPiece(this.game, state);
  }
}
