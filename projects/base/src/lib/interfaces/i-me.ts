import { IFriend } from './i-friend';
import { IEnemy } from './i-enemy';
export interface IMe {
  id: string;
  name: string;
  handle?: string;
  teamName?: string;
  friends: IFriend[];
  enemies: IEnemy[];
}