import { BaseGame, IBaseGameSave, IBaseGameState } from './base-game';
import { BaseBoard, IBaseBoardSave } from './base-board';
import { BaseTerritory, IBaseTerritorySave } from './base-territory';
import { IBaseMove } from './i-base-move';
import { Player } from './player';
import { StateStore } from './state-store';


export interface IBaseTeamSave<
  Game extends BaseGame<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  IGameOptions,
  IGameState extends IBaseGameState<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  IGameSave extends IBaseGameSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  Board extends BaseBoard<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  IBoardSave extends IBaseBoardSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  Territory extends BaseTerritory<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  ITerritorySave extends IBaseTerritorySave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  Team extends BaseTeam<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  TeamId extends string,
  ITeamSave extends IBaseTeamSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  IMove extends IBaseMove<TeamId>,
  IModMove
  > {
  myTurn: boolean,
  playing: boolean,
  resigned: boolean
}

export abstract class BaseTeam<
  Game extends BaseGame<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  IGameOptions,
  IGameState extends IBaseGameState<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  IGameSave extends IBaseGameSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  Board extends BaseBoard<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  IBoardSave extends IBaseBoardSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  Territory extends BaseTerritory<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  ITerritorySave extends IBaseTerritorySave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  Team extends BaseTeam<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  TeamId extends string,
  ITeamSave extends IBaseTeamSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>,
  IMove extends IBaseMove<TeamId>,
  IModMove
  > {
  constructor(game: Game, id: TeamId) {
    this._game = game;
    this._id = id;
    this._player = new Player<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>(<Team><any>this);
  }
  public readonly uuid: string = "a team";
  public myTurn: boolean = false;
  public playing: boolean = true;
  public resigned: boolean = false;
  protected _game: Game
  public get game(): Game {
    return this._game;
  }
  private _id: TeamId
  public get id(): TeamId {
    return this._id;
  }
  private _player: Player<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove>;
  public get player(): Player<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, IMove, IModMove> {
    return this._player;
  }

  abstract get title(): string;
  public setState(state: string): string {
    this.myTurn = (state.length > 0 && state.charAt(0) === "@");
    this.playing = (state.length === 0 || state.charAt(0) !== "!");
    if (this.myTurn || !this.playing)
      state = state.substr(1);
    return state;
  };
  public getState(): string {
    return this.myTurn ? "@" : this.playing ? "" : "!";
  };
  public isUs(): boolean {
    return this.player.isUs;
  }

  private stateStore = new StateStore<ITeamSave>();
  save() {
    const saved = this.saving();
    this.stateStore.push(saved);
  }
  saving(): ITeamSave {
    return <ITeamSave>{
      myTurn: this.myTurn,
      playing: this.playing,
      resigned: this.resigned
    };
  }
  restore(depth: number) {
    const saved = this.stateStore.pop(depth);
    if (!saved)
      throw "Missing " + this.id + " team restore state";
    this.restoring(saved)
  }
  restoring(saved: ITeamSave) {
    this.myTurn = saved.myTurn;
    this.playing = saved.playing;
    this.resigned = saved.resigned;
  }
  commit() {
    this.stateStore.commit();
  }
  beginningMove() {
  }
  getIndex(): number {
    for (let i = 0; i < this.game.teams.length; i++)
      if (this.game.teams[i] === <any>this)
        return i;
    throw "this team not found";
  }
  getNext(any?: boolean): Team | undefined {
    const ourIndex = this.getIndex();
    let index = ourIndex;
    do {
      index = (index + 1) % this.game.teams.length;
      if (index === ourIndex)
        return;
    } while (!any && !this.game.teams[index].playing);
    return this.game.teams[index];
  }
}