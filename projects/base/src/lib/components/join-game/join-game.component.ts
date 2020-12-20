import { Component, Input, TemplateRef, OnInit } from '@angular/core';
import { IStartGame } from '../../interfaces/i-start-game';
import { IStartTeam } from '../../interfaces/i-start-team';
import { IEnemy } from '../../interfaces/i-enemy';
import { IMe } from '../../interfaces/i-me';
import { IEnemyEntry } from '../../dialogs/confirm-join-enemy/i-enemy-entry';
import { AuthenticationDialog } from '../../dialogs/authentication/authentication-dialog';
import { ConfirmJoinEnemyDialog } from '../../dialogs/confirm-join-enemy/confirm-join-enemy-dialog';
import { of } from 'rxjs';

@Component({
  selector: 'gamesbyemail-base-joingame',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {
  @Input() optionsTemplate!: TemplateRef<any>;
  @Input() game!: IStartGame;
  @Input() me!: IMe;
  @Input() myTeam!: IStartTeam;
  anyOptionsChosen: boolean = false;
  alreadyJoined = false;
  joinName: string = "";

  constructor(private authenticationDialog:AuthenticationDialog,private confirmJoinEnemyDialog: ConfirmJoinEnemyDialog) {
  }

  ngOnInit(): void {
    this.updateAlreadyJoined();
    if (this.game.options && !this.game.options.$default)
      for (let i in this.game.options)
        if (this.game.options[i] && typeof (this.game.options[i]) !== "function") {
          this.anyOptionsChosen = true;
          break;
        }
    // Keep packager from saying TemplateRef never used.
    this.optionsTemplate instanceof TemplateRef;
  }
  updateAlreadyJoined() {
    for (let i = 0; i < this.game.teams.length; i++)
      if (this.isMe(this.game.teams[i]))
        return this.alreadyJoined = true;
    return this.alreadyJoined = false;
  }
  isEmpty(team: IStartTeam): boolean {
    return team.player.user === undefined;
  }
  isMe(team: IStartTeam): boolean {
    return (team.player.user !== undefined && team.player.user.id === this.me.id);
  }
  isFriend(team: IStartTeam): boolean {
    if (team.player.user !== undefined)
      for (let i = 0; i < this.me.friends.length; i++)
        if (team.player.user.id === this.me.friends[i].id)
          return true;
    return false;
  }
  getEnemy(team: IStartTeam): IEnemy | undefined {
    if (team.player.user !== undefined)
      for (let i = 0; i < this.me.enemies.length; i++)
        if (team.player.user.id === this.me.enemies[i].id)
          return this.me.enemies[i];
    return;
  }
  isEnemy(team: IStartTeam): boolean {
    return this.getEnemy(team) !== undefined;
  }
  isStranger(team: IStartTeam): boolean {
    return !this.isEmpty(team) && !this.isMe(team) && !this.isFriend(team) && !this.isEnemy(team);
  }
  friendName(team: IStartTeam): string {
    if (team.player.user !== undefined)
      for (let i = 0; i < this.me.friends.length; i++)
        if (team.player.user.id === this.me.friends[i].id)
          return this.me.friends[i].name;
    return team.title;
  }
  enemyName(team: IStartTeam): string {
    const enemy = this.getEnemy(team);
    return enemy ? enemy.name : team.title;
  }
  enemyNotes(team: IStartTeam): string {
    const enemy = this.getEnemy(team);
    return enemy ? enemy.notes : "";
  }
  playThisTeam(team: IStartTeam) {
    (this.me.id ? of(this.me) : this.authenticationDialog.openLogIn(this.me))
    .subscribe(me=>{
      if (this.me.id) {
        team.player.user = this.me;
        team.player.joining = true;
        this.updateAlreadyJoined();
      }
    });
  }
  cancelJoin(team: IStartTeam) {
    team.player.user = undefined;
    delete team.player.joining;
    this.updateAlreadyJoined();
  }
  anyEnemies(): IEnemyEntry[] {
    let list: IEnemyEntry[] = [];
    for (let i = 0; i < this.game.teams.length; i++) {
      const enemy = this.getEnemy(this.game.teams[i]);
      if (enemy) {
        let insertIndex = 0;
        while (insertIndex < list.length)
          if (list[insertIndex].enemy === enemy)
            break;
          else
            insertIndex++;
        if (insertIndex === list.length)
          list.push({ enemy: enemy, teams: [] });
        list[insertIndex].teams.push(this.game.teams[i]);
      }
    }
    return list;
  }
  okJoin(team: IStartTeam) {
    const enemies = this.anyEnemies();
    (enemies.length > 0 ? this.confirmJoinEnemyDialog.open({ enemies: enemies }) : of(true))
      .subscribe(result => {
        if (result) {
          delete team.player.joining;
          team.player.title = this.joinName || this.me.handle || this.me.name;
          this.updateAlreadyJoined();
        } else
          this.cancelJoin(team);
      });
  }
}