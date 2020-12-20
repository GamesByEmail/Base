import { IStartGame } from '../interfaces/i-start-game';
import { testMes } from './test-mes';

export const testGames: {
  chess: IStartGame,
  ww2: IStartGame
} = {
  chess: {
    title: "Chess game",
    teams: [{
      title: "White",
      player: {
        title: testMes.basic.friends[0].handle,
        user: testMes.basic.friends[0]
      }
    }, {
      title: "Black",
      player: {
        user: undefined
      }
    }],
    options: {}
  },
  ww2: {
    title: "WW2 game",
    teams: [
      {
        title: "U.S.S.R.",
        player: {
          title: testMes.basic.friends[0].handle,
          user: testMes.basic.friends[0]
        }
      }, {
        title: "Germany",
        player: {
          user: undefined
        }
      }, {
        title: "United Kingdom",
        player: {
          title: testMes.basic.friends[2].handle,
          user: testMes.basic.friends[2]
        }
      }, {
        title: "Japan",
        player: {
          title: testMes.basic.enemies[0].notes,
          user: testMes.basic.enemies[0]
        }
      }, {
        title: "United States",
        player: {
          title: "Lawson",
          user: {
            id: undefined
          }
        }
      }
    ],
    options: {}
  }
};