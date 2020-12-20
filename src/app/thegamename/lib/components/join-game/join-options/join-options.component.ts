import { Component, Input } from '@angular/core';
import { IStartGame } from 'projects/base/src/public-api';

@Component({
  selector: 'gamesbyemail-games-thegamename-joinoptions',
  templateUrl: './join-options.component.html',
  styleUrls: ['./join-options.component.css']
})
export class JoinOptionsComponent {
  @Input('game') game!: IStartGame;
  dummy: any;

  optionChosen(optionName: string, value?: any): boolean {
    return value === undefined ? !!this.game.options[optionName] : this.game.options[optionName] === value;
  }
}
