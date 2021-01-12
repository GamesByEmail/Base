import { Point2D } from '@packageforge/geometry2d';
import { BaseGame, IBaseGameSave, IBaseGameState } from './base-game';
import { IBaseBoardSave} from './base-board';
import { BaseGridBoard } from './base-grid-board';
import { BaseTerritory, IBaseTerritorySave } from './base-territory';
import { BaseTeam, IBaseTeamSave } from './base-team';
import { IBaseMove } from './i-base-move';

export abstract class BaseGridTerritory<
  Game extends BaseGame<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IGameOptions,
  IGameState extends IBaseGameState<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IGameSave extends IBaseGameSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  Board extends BaseGridBoard<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IBoardState extends any | string,
  IBoardSave extends IBaseBoardSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  Territory extends BaseGridTerritory<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  ITerritoryState,
  ITerritorySave extends IBaseTerritorySave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  Team extends BaseTeam<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  TeamId extends string,
  ITeamState extends string | any,
  ITeamSave extends IBaseTeamSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IMove extends IBaseMove<TeamId>,
  IModMove
  > extends BaseTerritory<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>

{
  constructor(board: Board, index: number) {
    super(board, index);
    this.position = new Point2D(this.board.positionFromIndex(index));
    Object.freeze(this.position);
  }
  adjacents: (Territory | undefined)[] = [];
  position: Point2D;
  public get title(): string {
    return String.fromCharCode(97 + this.position.x) + (this.position.y + 1);
  }
  abstract isEmpty(): boolean
  delta(toTerritory: Territory): Point2D {
    return toTerritory.position.clone().subtract(this.position);
  }
  reducePathBetween<A>(accumulator: A, toTerritory: Territory, callback: (accumulator: A, territory: Territory | undefined, position: Point2D) => A, includeStart?: boolean, includeEnd?: boolean): A {
    const step = this.delta(toTerritory).stepify();
    const position = this.position.clone();
    if (!includeStart)
      position.add(step);
    while (true) {
      const isEnd = position.equals(toTerritory.position);
      if (isEnd && !includeEnd)
        break;
      accumulator = callback(accumulator, this.board.findTerritory(position), position);
      if (isEnd)
        break;
      position.add(step);
    }
    return accumulator;
  }
  pathIsEmpty(toTerritory: Territory, includeStart?: boolean, includeEnd?: boolean): boolean {
    return this.reducePathBetween(true as boolean, toTerritory, (isEmptySoFar, between) => {
      return isEmptySoFar && between !== undefined && between.isEmpty();
    }, includeStart, includeEnd);
  }
}