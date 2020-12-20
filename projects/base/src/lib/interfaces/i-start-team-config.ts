import { IStartTeam } from './i-start-team';

export interface IStartTeamConfig {
  title?: string;
  teams: IStartTeam[];
  optionNames?: string[];
}