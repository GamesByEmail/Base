import { BaseGame, IBaseGameSave, IBaseGameState } from 'projects/base/src/public-api';
import { Board, IBoardSave } from './board';
import { Team, ITeamSave } from './team';
import { Territory, ITerritorySave } from './territory';
import { TeamId } from './team-id';
import { Move, IModMove, isIMove } from './move';

export interface IGameOptions {
  jumpMultiplier?: boolean;
}
export interface IGameState extends IBaseGameState<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, Move, IModMove> {
  board: string;
  teams: string[];
  moves: Move[];
}

export interface IGameSave extends IBaseGameSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, Move, IModMove> {
  header: string;
}
export class Game extends BaseGame<Game, IGameOptions, IGameState, IGameSave, Board, IBoardSave, Territory, ITerritorySave, Team, TeamId, ITeamSave, Move, IModMove> {
  constructor() {
    super();
    this._teams.push(new Team(this, TeamId.USSR));
    this._teams.push(new Team(this, TeamId.Germany));
    this._teams.push(new Team(this, TeamId.UnitedKingdom));
    this._teams.push(new Team(this, TeamId.Japan));
    this._teams.push(new Team(this, TeamId.UnitedStates));
    this._board = new Board(this);
  }

  public setState(state: IGameState) {
    super.setState(state);
    if (this.lastMoves.length > 0) {
      const move = this.lastMoves[0];
    }
  }

  public incrementTurn() {
    const turnTeam = this.findTurnTeam()!;
    turnTeam.myTurn = false;
    const opponent = turnTeam.getNext()!;
    if (opponent)
      opponent.myTurn = true;
    const state = this.commit();
    //console.log(JSON.stringify(state));
    this.setState(state);
  }
}
