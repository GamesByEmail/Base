import { BaseGame, IBaseGameSave, IBaseGameState } from './base-game';
import { BaseBoard, IBaseBoardSave} from './base-board';
import { IBaseTerritorySave } from './base-territory';
import { BaseTeam, IBaseTeamSave } from './base-team';
import { IBaseMove } from './i-base-move';
import { BaseMapTerritory, IBaseMapTerritoryData } from './base-map-territory';

export abstract class BaseMapBoard<
  Game extends BaseGame<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IGameOptions,
  IGameState extends IBaseGameState<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IGameSave extends IBaseGameSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  Board extends BaseMapBoard<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryData, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IBoardState extends any | string,
  IBoardSave extends IBaseBoardSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  Territory extends BaseMapTerritory<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryData, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  ITerritoryData extends IBaseMapTerritoryData,
  ITerritoryState,
  ITerritorySave extends IBaseTerritorySave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  Team extends BaseTeam<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  TeamId extends string,
  ITeamState extends string | any,
  ITeamSave extends IBaseTeamSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>,
  IMove extends IBaseMove<TeamId>,
  IModMove
  > extends BaseBoard<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, IMove, IModMove>
{
  constructor(game:Game,data:ITerritoryData[]){
    super(game);
    for (let i = 0; i < data.length; i++)
      this.territories[i] = this.createTerritory(i, data[i]);
    this.territories.forEach((territory,index)=>{
      const adjacentIndices=data[index].adjacentIndices;
      if (adjacentIndices)
        for (let i=0;i<adjacentIndices.length;i++)
          territory.adjacents[i]=this.territories[adjacentIndices[i]];
    });
  }
  abstract createTerritory(index:number,data:ITerritoryData):Territory;
  setPerspective(id:TeamId){
  }
}
