import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'gamesbyemail-base-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('game-name') gameName:string="test";
  @Input('play') play!:TemplateRef<any>;
  @Input('start-game') startGame!:TemplateRef<any>;
  @Input('join-game') joinGame!:TemplateRef<any>;
  @Input('rules') rules!:TemplateRef<any>;
  initialTab:number=0;
  get tabIndexStorageKey():string {
    return "gamesbyemail-test:"+this.gameName.replace(/\s/g,"")+":selectedTab";
  }
  constructor() { 
  }

  ngOnInit() {
    const indexStr:string=window.localStorage.getItem(this.tabIndexStorageKey)||"";
    this.initialTab=parseInt(indexStr);
    if (isNaN(this.initialTab))
      this.initialTab=0;
    // Keep packager from saying TemplateRef never used.
    this.play instanceof TemplateRef;
  }
  selectedIndexChange(index:number) {
    window.localStorage.setItem(this.tabIndexStorageKey,index.toString());
  }

}
