import { IBaseTeamSave, BaseTeam } from 'projects/base/src/public-api';
import { Game, IGameOptions, IGameState, IGameSave } from './game';
import { Board, IBoardSave } from './board';
import { Territory, ITerritorySave } from './territory';
import { TeamId, areFriendly, areHostile } from './team-id';
import { Move, IModMove } from './move';
import { ITechTree, TechString, allTechs } from './i-tech-tree';

export interface ITeamSave extends IBaseTeamSave<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, Move, IModMove> {
}

export class Team extends BaseTeam<Game, IGameOptions, IGameState, IGameSave, Board, IBoardState, IBoardSave, Territory, ITerritoryState, ITerritorySave, Team, TeamId, ITeamState, ITeamSave, Move, IModMove> {
  ipcs: number = 0;
  techTree: ITechTree = {};
  constructor(game: Game, id: TeamId) {
    super(game, id);
  }
  get title(): string {
    return this.id;
  }
  setState(state: string): string {
    state = super.setState(state);
    if (state.search(/^(\-?\d+)/) === 0) {
      this.ipcs = parseInt(RegExp.$1);
      state = state.substr(RegExp.$1.length);
    } else
      this.ipcs = 0;
    allTechs.forEach(tech=>{
      state = this.setTechTreeByState(state, tech);
    });
    return state;
  }
  setTechTreeByState(state: string, tech: TechString): string {
    if (state.startsWith(tech.charAt(0))) {
      this.techTree[tech] = true;
      state = state.substr(1);
    } else
      this.techTree[tech] = false;
    return state;
  }
  getState(): string {
    let state = super.getState();
    if (this.ipcs !== 0)
      state += this.ipcs;
    allTechs.forEach(tech=>{
      state += this.getTechTreeState(tech);
    });
    return state;
  }
  getTechTreeState(tech: TechString): string {
    return this.techTree[tech] ? tech.charAt(0) : "";
  }
  isFriendly(team: Team) {
    return areFriendly(this.id, team.id);
  }
  isHostile(team: Team) {
    return areHostile(this.id, team.id);
  }
}

