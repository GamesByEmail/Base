import { Component, OnInit, Input } from '@angular/core';
import { teamConfigs } from './team-configs';
import { IMe, IStartTeamConfig } from 'projects/base/src/public-api';
import { deepCopy } from '@packageforge/deep-copy';

@Component({
  selector: 'gamesbyemail-games-thegamename-startgame',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  constructor() { }
  @Input() me!: IMe;
  teamConfigs: IStartTeamConfig[] = deepCopy(teamConfigs);

  ngOnInit() {
  }

}
