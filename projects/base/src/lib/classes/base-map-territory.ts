import { Point2D } from '@packageforge/geometry2d';
import { BaseGame, IBaseGameSave, IBaseGameState } from './base-game';
import { IBaseBoardSave } from './base-board';
import { BaseMapBoard } from './base-map-board';
import { BaseTerritory, IBaseTerritorySave } from './base-territory';
import { BaseTeam, IBaseTeamSave } from './base-team';
import { IBaseMove } from './i-base-move';

export interface IBaseMapTerritoryData {
  title:string;
  adjacentIndices:number[];
}

export abstract class BaseMapTerritory<
  Game extends BaseGame<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  IGameOptions,
  IGameState extends IBaseGameState<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  IGameSave extends IBaseGameSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  Board extends BaseMapBoard<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritoryData, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  IBoardSave extends IBaseBoardSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  Territory extends BaseMapTerritory<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritoryData, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  ITerritoryData extends IBaseMapTerritoryData,
  ITerritorySave extends IBaseTerritorySave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  Team extends BaseTeam<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  TeamId extends string,
  ITeamSave extends IBaseTeamSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  IMove extends IBaseMove<TeamId>,
  IModMove
  > extends BaseTerritory<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>

{
  constructor(board: Board, index: number, data:ITerritoryData ) {
    super(board, index);
    this.setData(data);
  }
  adjacents: Territory[] = [];
  title:string="";
  setData(data:ITerritoryData){
    this.title=data.title;
  }
}