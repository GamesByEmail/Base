export interface IPlayerData {
  title: string;
  id?: string;
}
export interface IGameData<IGameOptions, IGameState, TeamId> {
  over: boolean;
  players: IPlayerData[];
  options?: IGameOptions;
  states: IGameState[];
  perspective?: TeamId;
}