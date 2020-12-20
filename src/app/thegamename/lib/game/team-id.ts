export enum TeamId {
  'USSR' = 'USSR',
  'Germany' = 'Germany',
  'UnitedKingdom' = 'UnitedKingdom',
  'Japan' = 'Japan',
  'UnitedStates' = 'UnitedStates',
  'Neutral' = 'Neutral',
  'SeaZone' = 'SeaZone'
}

export function isAllies(team:TeamId):boolean {
  return team===TeamId.USSR || team===TeamId.UnitedKingdom || team===TeamId.UnitedStates;
}
export function isAxis(team:TeamId):boolean {
  return team===TeamId.Germany || team===TeamId.Japan;
}
export function areFriendly(team1:TeamId,team2:TeamId) {
  return isAllies(team1) ? isAllies(team2) : isAxis(team1) && isAxis(team2);
}
export function areHostile(team1:TeamId,team2:TeamId) {
  return !areFriendly(team1,team2);
}