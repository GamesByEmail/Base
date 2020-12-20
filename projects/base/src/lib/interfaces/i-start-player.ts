import { IUser } from './i-user';

export interface IStartPlayer {
  title?: string;
  user?: IUser;
  joining?: boolean;
}
