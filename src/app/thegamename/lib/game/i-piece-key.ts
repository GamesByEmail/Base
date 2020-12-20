import { TeamId } from './team-id';
import { ITechTree } from './i-tech-tree';

export interface IPieceKey {
  unit: string;
  teamId: TeamId;
  techTree:ITechTree;
}
