import { Component, Input, TemplateRef, OnInit  } from '@angular/core';
import { IStartTeamConfig } from '../../interfaces/i-start-team-config';
import { IMe } from '../../interfaces/i-me';
import { IStartOptions } from '../../interfaces/i-start-options';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'gamesbyemail-base-startgame',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css'],
  animations: [
    trigger(
      'playerTransition', [
        transition(':enter', [
          style({opacity: 0}),
          animate('150ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          //style({position: "absolute"}),
          //animate('150ms', style({opacity: 0}))
        ])
      ]
    )
  ]
})
export class StartGameComponent implements OnInit {
  @Input() optionsTemplate!:TemplateRef<any>;
  @Input() configIndex:number=0;
  @Input() teamConfigs!: IStartTeamConfig[];
  @Input() me!: IMe;
  @Input() options!:IStartOptions;
  teamConfig!: IStartTeamConfig;
  anyOptionsChosen:boolean=false;

  constructor(){
  }
  ngOnInit(): void {
    this.teamConfig=this.teamConfigs[this.configIndex];
    if (this.optionsTemplate && !this.options)
      this.options={};
    this.updateAnyChosenOptions();
    // Keep packager from saying TemplateRef never used.
    this.optionsTemplate instanceof TemplateRef;
  }
  optionChange=()=>{
    this.updateAnyChosenOptions();
  };
  updateAnyChosenOptions():boolean{
    if (this.options)
      for (let i in this.options)
        if (this.options[i] && typeof(this.options[i])!=="function")
          return this.anyOptionsChosen=true;
    return this.anyOptionsChosen=false;
  }
  startGame(){
    let options:IStartOptions=(typeof(this.options.$finalize)==="function" ? this.options.$finalize() : null) || this.options;
    console.log(options);
  }
}
