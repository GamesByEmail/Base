import { Component } from '@angular/core';
import {
  GameFormService,
  AuthenticationDialog,
  IStartTeamConfig,
  IMe,
  IStartGame,
  testGames
} from 'projects/base/src/public-api';
import { testData } from './test-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rulesTeam = "White";
  teamConfigs: IStartTeamConfig[] = testData.configs.ww2;
  me: IMe;
  game: IStartGame = testGames.ww2;
  constructor(gameformService: GameFormService, authenticationDialog: AuthenticationDialog) {

    this.game.options.noUssrCombatFirstRound = "attacked";
    this.game.options.noEconomicVictory = "true";
    this.game.options.axisWeaponDevelopmentBenefits = "true";
    this.game.options.straits = "true";
    this.game.options.noNewFactories = "true";
    this.game.options.weakInfantry = "true";
    gameformService.setTestData(testData);
    //gameformService.setTestErrorMessage("Invalid credentials.");
    //gameformService.setTestErrorMessage("No wanna be your friend...");
    gameformService.setTestDelayTicks(250);
    //authenticationDialog.openForgotPassword(this.me);
    this.me = testData.mes.new;
    //this.me = testData.mes.new;
  }
}
