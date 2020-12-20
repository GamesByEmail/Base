import { IStartTeam } from '../../interfaces/i-start-team';
import { IEnemy } from '../../interfaces/i-enemy';

export interface IEnemyEntry {
  enemy:IEnemy,
  teams:IStartTeam[]
};
