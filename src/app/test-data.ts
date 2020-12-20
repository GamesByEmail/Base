import { 
  IStartGame,
  IStartTeamConfig,
  IStartPlayer,
  IMe,
  testMes
 } from 'projects/base/src/public-api';

export const testData: {
  players: IStartPlayer[],
  configs: { [name: string]: IStartTeamConfig[] },
  mes: { [name: string]: IMe },
  games: { [name: string]: IStartGame }
} = {
  mes: testMes,
  players: [
    {
      user: undefined
    },
    {
      user: undefined
    },
    {
      user: undefined
    },
    {
      user: undefined
    },
    {
      user: undefined
    },
    {
      user: undefined
    },
    {
      user: undefined
    }
  ],
  configs: {
  },
  games: {
  }
};
testData.configs.chess = [
  {
    teams: [
      {
        title: "White",
        player: testData.players[0]
      },
      {
        title: "Black",
        player: testData.players[1]
      }
    ]
  }
];
testData.configs.ww2 = [
  {
    // 2 player
    teams: [
      {
        title: "U.S.S.R. / U.K. / U.S.",
        player: testData.players[0]
      },
      {
        title: "Germany / Japan",
        player: testData.players[1]
      }
    ],
    optionNames: [
      "noUssrCombatFirstRound"
    ]
  },
  {
    // 3 player
    teams: [
      {
        title: "U.S.S.R. / United States",
        player: testData.players[0]
      },
      {
        title: "Germany / Japan",
        player: testData.players[1]
      },
      {
        title: "United Kingdom",
        player: testData.players[2]
      }
    ],
    optionNames: [
      "noUssrCombatFirstRound",
      "noUssrCombatUntilAttacked",
      "noEconomicVictory"
    ]
  },
  {
    // 4 player
    teams: [
      {
        title: "U.S.S.R. / United States",
        player: testData.players[0]
      },
      {
        title: "Germany",
        player: testData.players[1]
      },
      {
        title: "United Kingdom",
        player: testData.players[2]
      },
      {
        title: "Japan",
        player: testData.players[3]
      }
    ],
    optionNames: [
      "noUssrCombatFirstRound",
      "noUssrCombatUntilAttacked",
      "noEconomicVictory",
      "axisWeaponDevelopmentBenefits",
      "straits"
    ]
  },
  {
    // 5 player
    teams: [
      {
        title: "U.S.S.R",
        player: testData.players[0]
      },
      {
        title: "Germany",
        player: testData.players[1]
      },
      {
        title: "United Kingdom",
        player: testData.players[2]
      },
      {
        title: "Japan",
        player: testData.players[3]
      },
      {
        title: "United States",
        player: testData.players[4]
      }
    ],
    optionNames: [
      "noUssrCombatFirstRound",
      "noUssrCombatUntilAttacked",
      "noEconomicVictory",
      "axisWeaponDevelopmentBenefits",
      "straits",
      "noNewFactories",
      "weakInfantry"
    ]
  }
];
