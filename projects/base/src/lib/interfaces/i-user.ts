import { IMe } from './i-me';
import { IFriend } from './i-friend';
import { IStranger } from './i-stranger';
import { IJoin } from './i-join';

export type IUser = IMe | IFriend | IStranger | IJoin;
