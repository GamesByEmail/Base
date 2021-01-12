import { BaseGame, IBaseGameSave, IBaseGameState } from './base-game';
import { BaseBoard, IBaseBoardSave} from './base-board';
import { BaseTeam, IBaseTeamSave } from './base-team';
import { IBaseMove } from './i-base-move';
import { StateStore } from './state-store';

export interface IBaseTerritorySave<
  Game extends BaseGame<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IGameOptions,
  IGameState extends IBaseGameState<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IGameSave extends IBaseGameSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  Board extends BaseBoard<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IBoardState extends any | string,
  IBoardSave extends IBaseBoardSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  Territory extends BaseTerritory<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  ITerritoryState,
  ITerritorySave extends IBaseTerritorySave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  Team extends BaseTeam<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  TeamId extends string,
  ITeamState extends string | any,
  ITeamSave extends IBaseTeamSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IMove extends IBaseMove<TeamId>,
  IModMove
  > {

}

export abstract class BaseTerritory<
  Game extends BaseGame<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IGameOptions,
  IGameState extends IBaseGameState<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IGameSave extends IBaseGameSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  Board extends BaseBoard<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IBoardState extends any | string,
  IBoardSave extends IBaseBoardSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  Territory extends BaseTerritory<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  ITerritoryState,
  ITerritorySave extends IBaseTerritorySave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  Team extends BaseTeam<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  TeamId extends string,
  ITeamState extends string | any,
  ITeamSave extends IBaseTeamSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IMove extends IBaseMove<TeamId>,
  IModMove
  > {
  constructor(board: Board, index: number) {
    this._board = board;
    this._index = index;
  }
  private _board: Board;
  public get board() {
    return this._board;
  }
  private _index: number;
  public get index() {
    return this._index;
  }
  abstract get title(): string;
  clearFlags(team?: Team): void {
  }
  abstract setState(state: ITerritoryState): ITerritoryState|undefined;
  abstract getState():ITerritoryState;

  private stateStore = new StateStore<ITerritorySave>();
  save() {
    const saved = this.saving();
    this.stateStore.push(saved);
  }
  saving(): ITerritorySave {
    return <ITerritorySave>{
    };
  }
  restore(depth: number) {
    const saved = this.stateStore.pop(depth);
    if (!saved)
      throw "Missing territory restore state";
    this.restoring(saved);
  }
  restoring(saved: ITerritorySave) {
  }
  commit() {
    this.stateStore.commit();
  }
  beginningMove() {
  }


}