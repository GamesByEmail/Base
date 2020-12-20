import { IStartTeam } from './i-start-team';
import { IStartOptions } from './i-start-options';

export interface IStartGame {
  title: string;
  teams: IStartTeam[];
  options: IStartOptions;
}