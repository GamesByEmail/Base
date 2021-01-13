import { MoveLog } from './move-log';
import { BaseBoard, IBaseBoardSave} from './base-board';
import { BaseTerritory, IBaseTerritorySave } from './base-territory';
import { BaseTeam, IBaseTeamSave } from './base-team';
import { IBaseMove } from './i-base-move';
import { Player } from './player';
import { StateStore } from './state-store';
import { IGameData } from './i-game-data';

export interface IBaseGameState<
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
  moveNumber: number;
  board?: IBoardState;
  teams: ITeamState[];
  moves: IMove[];
}
export interface IBaseGameSave<
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
export abstract class BaseGame<
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
  /*
protected _player!: Player<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>;
public get player() {
  return this._player;
}
*/
  protected _over: boolean = false;
  public get over() {
    return this._over;
  }
  protected _teams: Team[] = [];
  public get teams() {
    return this._teams;
  }
  protected _board!: Board;
  public get board() {
    return this._board;
  }
  private _perspective!: TeamId;
  public get perspective() {
    return this._perspective;
  }
  public set perspective(value: TeamId) {
    this.board.setPerspective(this._perspective = value);
  }
  protected _moveNumber: number = -1;
  public get moveNumber() {
    return this._moveNumber;
  }
  public states: IGameState[] = [];
  protected moveLog = new MoveLog<IMove, IModMove>();
  log(move: IMove): this {
    if (!move.id)
      move.id = this.findUsPlayer(true)!.team.id;
    this.moveLog.push(move);
    return this;
  }
  modLog(modifications: IModMove): this {
    this.moveLog.modify(modifications);
    return this;
  }
  findUsPlayer(ourTurn?: boolean): Player<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove> | undefined {
    for (let i = 0; i < this.teams.length; i++)
      if (this.teams[i].player.isUs && ourTurn ? this.teams[i].myTurn : true)
        return this.teams[i].player;
    return;
  }
  public lastMoves: IMove[] = [];

  public options: IGameOptions = <IGameOptions>{};
  setOptions(options?: IGameOptions) {
    this.options = options ? options : <IGameOptions>{};
  }
  public setGameData(data: IGameData<IGameOptions, IGameState, TeamId>) {
    this._over = data.over;
    this.setOptions(data.options);
    for (let i = 0; i < data.players.length; i++)
      this.teams[i].player.setData(data.players[i]);
    if (data.perspective)
      this.perspective = data.perspective;
    else {
      const player = this.findUsPlayer();
      this.perspective = player ? player.team.id : this.teams[0].id;
    }
    this.states.length = 0;
    this.states.push(...data.states);
    this.setState(this.states[this.states.length - 1]);
  }
  public setState(state: IGameState) {
    if (this.moveNumber !== state.moveNumber) {
      this._moveNumber = state.moveNumber;
      if (state.board!==undefined)
        this.board.setState(state.board);
      for (let i = 0; i < this.teams.length; i++)
        this.teams[i].setState(state.teams[i]);
      this.lastMoves = state.moves;
    }
  }
  public getState(): IGameState {
    const state: IBaseGameState<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove> = {
      moveNumber: this.moveNumber,
      board: this.board.getState(),
      teams: this.teams.map(team => team.getState()),
      moves: this.moveLog.getState()
    };
    return <IGameState>state;
  }
  public findTeam(id: TeamId | number | Team): Team {
    if (typeof (id) === "string")
      for (let i = 0; i < this.teams.length; i++)
        if (this.teams[i].id === id)
          return this.teams[i];
    if (typeof (id) === "number")
      return this.teams[id];
    for (let i = 0; i < this.teams.length; i++)
      if (this.teams[i] === id)
        return this.teams[i];
    return <any>undefined;
  }
  public findTurnTeam(): Team | undefined {
    for (let i = 0; i < this.teams.length; i++)
      if (this.teams[i].myTurn)
        return this.teams[i];
    return;
  }

  protected stateStore = new StateStore<IGameSave>();

  save() {
    const saved = this.saving();
    this.stateStore.push(saved);
    this.teams.forEach(team => team.save());
    this.board.save();
    this.moveLog.save();
    return saved;
  }
  saving(): IGameSave {
    return <IGameSave>{
    };
  }
  restore(all?: boolean) {
    if (this.stateStore.depth < 0)
      throw ("restore called before save on game");
    const depth = all ? this.stateStore.depth : 0;
    const saved = this.stateStore.pop(depth);
    if (!saved)
      throw "Missing game restore state";
    this.restoring(saved);
    this.teams.forEach(teams => teams.restore(depth));
    this.board.restore(depth);
    this.moveLog.restore(depth);
  }
  restoring(saved: IGameSave) {
  }
  commit(): IGameState {
    this.stateStore.commit();
    this.teams.forEach(team => team.commit());
    this.board.commit();
    this.moveLog.commit();
    this._moveNumber++;
    const state = this.getState();
    this.lastMoves = state.moves;
    this.moveLog.clear();
    this.states.push(state);
    return state;
  }
  beginningMove() {
    this.board.beginningMove();
    this.teams.forEach(team => team.beginningMove());
  }
  public rollDie(max: number = 6, min: number = 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  public rollDice(count: number, max: number = 6, min: number = 1) {
    const dice = new Array<number>(count);
    for (let i = 0; i < count; i++)
      dice[i] = this.rollDie(max, min);
    return dice;
  }
}