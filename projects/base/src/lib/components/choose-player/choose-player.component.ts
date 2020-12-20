import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';

import { GameFormService } from '../../services/game-form/game-form.service';
import { AuthenticationDialog } from '../../dialogs/authentication/authentication-dialog';
import { AddPlayerDialog } from '../../dialogs/add-player/add-player-dialog';
import { IUser } from '../../interfaces/i-user';
import { IStartTeam } from '../../interfaces/i-start-team';
import { IMe } from '../../interfaces/i-me';
import { IFriend } from '../../interfaces/i-friend';
import { IJoin } from '../../interfaces/i-join';
import { IAdd } from '../../interfaces/i-add';
import { IExperience } from '../../interfaces/i-experience';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'gamesbyemail-base-chooseplayer',
  templateUrl: './choose-player.component.html',
  styleUrls: ['./choose-player.component.css']
})
export class ChoosePlayerComponent implements OnInit, OnDestroy {
  @Input() team!: IStartTeam;
  @Input() me!: IMe;
  @Input() teams!: IStartTeam[];
  join: IJoin;
  add: IAdd;
  experienceLevels: IExperience[];
  user!: FormControl;
  constructor(
    private gameformService: GameFormService,
    private authenticationDialog: AuthenticationDialog,
    private addPlayerDialog: AddPlayerDialog
  ) {
    this.join = this.gameformService.createJoin();
    this.add = this.gameformService.createAdd();
    this.experienceLevels = this.gameformService.getExperienceLevels();
  }

  ngOnInit(): void {
    if (!this.team) throw ("No team spacified");
    if (!this.me) throw ("No me spacified");
    if (this.team.player.user) {
      if (this.gameformService.userIsJoin(this.team.player.user)) {
        this.join.experience = this.team.player.user.experience;
        this.team.player.user = this.join;
      }
    }
    this.user = new FormControl(this.team.player.user, Validators.required);
  }
  ngOnDestroy(): void {
    this.pickerDelay();
  }
  userIsFriend(user: IUser | undefined): user is IFriend {
    return this.gameformService.userIsFriend(this.me, user);
  }
  userIsJoin(user: IUser | undefined): user is IJoin {
    return this.gameformService.userIsJoin(user);
  }
  experienceTitle(experience: number): string {
    for (let i = 0; i < this.experienceLevels.length; i++)
      if (experience === this.experienceLevels[i].experience)
        return this.experienceLevels[i].title;
    return experience.toString();
  }
  experienceDeterminer(experience: number): "a" | "an" {
    return this.experienceTitle(experience).search(/^[aeiou]/i) === 0 ? "an" : "a";
  }
  experienceDescription(experience: number): string {
    for (let i = 0; i < this.experienceLevels.length; i++)
      if (experience === this.experienceLevels[i].experience)
        return this.experienceLevels[i].description;
    return experience.toString();
  }
  selectedCount(user: IUser): number {
    let count = 0;
    for (let i = 0; i < this.teams.length; i++)
      if (this.teams[i].player.user === user)
        count++;
    return count;
  }
  setPlayer(user?: IUser) {
    this.team.player.user = user;
  }
  timerHandle: any;
  prevValue: IUser | undefined;
  pickerDelay(ticks?: number, fnc?: (arg: IUser | undefined) => void) {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = undefined;
    }
    if (fnc) {
      if (this.team.player)
        this.prevValue = this.team.player.user;
      this.timerHandle = setTimeout(() => {
        this.timerHandle = undefined;
        let value: IUser | undefined = this.prevValue;
        this.prevValue = undefined;
        fnc(value);
      }, ticks);
    }
  }
  playerPickerSelectionChange(event: MatSelectChange) {
    if (event.value === this.add)
      this.pickerDelay(1, prevValue => {
        this.addPlayer(event.source._elementRef.nativeElement)
          .subscribe(result => {
            this.setPlayer(result || prevValue);
          });
      });
    else if (event.value === this.me && !this.me.id)
      this.pickerDelay(1, prevValue => {
        this.logIn(event.source._elementRef.nativeElement)
          .subscribe(result => {
            this.setPlayer(result || prevValue);
          });
      });
    else if (!event.value)
      this.pickerDelay(1, prevValue => {
        this.signUp(event.source._elementRef.nativeElement)
          .subscribe(result => {
            this.setPlayer(result || prevValue);
          });
      });
    else
      this.pickerDelay();
    this.setPlayer(event.value);
  }
  /*
    
    playerPickerSelectionChange(event: MatSelectChange) {
      if (!event.value || (event.value === this.me && !this.me.id))
        this.pickerDelay(1, prevValue => {
          if (event.value)
            this.logIn(event.source._elementRef.nativeElement)
              .subscribe(result => {
                this.setPlayer(result || prevValue);
              });
          else if (!this.me.id)
            this.signUp(event.source._elementRef.nativeElement)
              .subscribe(result => {
                this.setPlayer(result || prevValue);
              });
          else
            this.addPlayer(event.source._elementRef.nativeElement)
              .subscribe(result => {
                this.setPlayer(result || prevValue);
              });
        });
      else
        this.pickerDelay();
      this.setPlayer(event.value);
    }
    */
  signUp(opener: HTMLElement): Observable<IMe | undefined> {
    return this.authenticationDialog.openSignUp(this.me, opener);
  }
  logIn(opener: HTMLElement): Observable<IMe | undefined> {
    return this.authenticationDialog.openLogIn(this.me, opener);
  }
  addPlayer(opener: HTMLElement): Observable<IFriend | undefined> {
    return this.addPlayerDialog.open(this.me, opener);
  }
}
