import { Component, OnInit } from '@angular/core';
import { IGameData } from 'projects/base/src/public-api';
import { Game, IGameOptions, IGameState } from '../../game/game';
import { TeamId } from '../../game/team-id';

@Component({
  selector: 'gamesbyemail-games-thegamename-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  game: Game = new Game();
  constructor() {
  }

  ngOnInit() {
    const gameData: IGameData<IGameOptions, IGameState, TeamId> = {
      over: false,
      players: [
        { title: "Jim", id: "ASDFASDF" },
        { title: "David", id: "ASDFASDF" },
        { title: "Malvin", id: "ASDFASDF" },
        { title: "Jennifer", id: "ASDFASDF" },
        { title: "Falken", id: "ASDFASDF" }
      ],
      options: {
      },
      //jrslih
      states: [
        {
          "moveNumber": 0,
          "board": "   B4T4 B2     B2T2 S1          S3  T3               T0S0 B3T3 T2 f4C4S4     T4 S2 T2     B1T1  f3B3C3   T1S1 i0i0i0 i4i4f4F4A4 A1i1i1a1a1f1 i2  i3  F2A2i2i2a2f2f2b2 i2 i1i1a1a1f1  i2    i0i0a0 F1A1i1i1a1 i3 i4i4  F0A0i0i0i0i0a0a0f0  i3i3f3    i3   i3  i4   i3i3i3f3 i1a1 i3i3   F0A0i0i0i0a0f0 F3A3i3i3i3a3f3b3  i2i2f2 i4  F1A1i1i1i1i1a1a1f1b1   i3i3f3  i1i1i1a1f1 i0i0  F4A4i4i4a4f4b4 i1i1i1a1f1 a2 i3 i4i4f4 i0i0i0i0i0 i3  i3  i2i2   i2a2 i1 i4  ",
          "teams": [
            "@48jrslih",
            "64jrslih",
            "60jrslih",
            "50jrslih",
            "72jrslih"
          ],
          "moves": []
        } 
      ]
    };
    this.game.setGameData(gameData);
  }

}
