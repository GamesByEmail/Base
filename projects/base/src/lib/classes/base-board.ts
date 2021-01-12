import { StateStore } from './state-store';
import { BaseGame, IBaseGameSave, IBaseGameState } from './base-game';
import { BaseTerritory, IBaseTerritorySave } from './base-territory';
import { BaseTeam, IBaseTeamSave } from './base-team';
import { IBaseMove } from './i-base-move';

export interface IBaseBoardSave<
  Game extends BaseGame<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IGameOptions,
  IGameState extends IBaseGameState<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IGameSave extends IBaseGameSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  Board extends BaseBoard<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IBoardState extends string | any,
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
let STATE_STRUCT: "STRING" | "STRUCT" | "UNKNOWN" | "UNDEFINED" = "UNDEFINED";

export abstract class BaseBoard<
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
  constructor(game: Game) {
    this._game = game;
  }
  private _game!: Game;
  public get game() {
    return this._game;
  }
  protected _territories: Territory[] = [];
  public get territories() {
    return this._territories;
  }
  protected stateStore = new StateStore<IBoardSave>();
  save() {
    const saved = this.saving();
    this.stateStore.push(saved);
    this.territories.forEach(territory => territory.save());
  }
  saving(): IBoardSave {
    return <IBoardSave>{};
  }
  restore(depth: number) {
    const saved = this.stateStore.pop(depth);
    if (!saved)
      throw "Missing board restore state";
    this.restoring(saved);
    this.territories.forEach(territory => territory.restore(depth));
  }
  restoring(saved: IBoardSave) {
  }
  commit() {
    this.stateStore.commit();
    this.territories.forEach(territory => territory.commit());
  }
  beginningMove() {
    this.territories.forEach(territory => territory.beginningMove());
  }
  public clearFlags(team?: Team) {
    for (let i = 0; i < this.territories.length; i++)
      this.territories[i].clearFlags(team);
  }
  public setState(state: IBoardState): void {
    this.clearFlags();
    let _state=<string>state;
    for (let i = 0; i < this.territories.length; i++)
      _state = <string><unknown>this.territories[i].setState(<ITerritoryState>state)!;
  }
  public getState(): IBoardState {
    return <IBoardState>this.territories.map(territory => territory.getState()).join("");
  }
  abstract setPerspective(id: TeamId): void;
}
