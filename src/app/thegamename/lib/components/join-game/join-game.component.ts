import { Component, Input } from '@angular/core';
import { IMe, IStartGame } from 'projects/base/src/public-api';

@Component({
  selector: 'gamesbyemail-games-thegamename-joingame',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent {

  @Input() me!: IMe;
  @Input() game!:IStartGame;

  constructor() { }

}
