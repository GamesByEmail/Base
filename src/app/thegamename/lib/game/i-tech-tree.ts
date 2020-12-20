
export type TechString = 'jetFighter' | 'rocketAAGun' | 'superSubmarine' | 'longRangeAircraft' | 'improvedIndustry' | 'heavyBomber';
export const allTechs:TechString[] = ['jetFighter', 'rocketAAGun', 'superSubmarine', 'longRangeAircraft', 'improvedIndustry', 'heavyBomber'];

export interface ITechTree {
  jetFighter?: boolean;
  rocketAAGun?: boolean;
  superSubmarine?: boolean;
  longRangeAircraft?: boolean;
  improvedIndustry?: boolean;
  heavyBomber?: boolean;
}
