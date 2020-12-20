import { IStartPlayer } from './i-start-player';

export interface IStartTeam {
  title: string;
  player: IStartPlayer;
  ready?: boolean;
}