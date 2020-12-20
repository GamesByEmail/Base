import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { flatMap, take } from 'rxjs/operators';

import { IJoin, joinId } from '../../interfaces/i-join';
import { IAdd, addId } from '../../interfaces/i-add';
import { IFriend } from '../../interfaces/i-friend';
import { IUser } from '../../interfaces/i-user';
import { IMe } from '../../interfaces/i-me';
import { IExperience } from '../../interfaces/i-experience';

@Injectable({
  providedIn: 'root'
})
export class GameFormService {
  testErrorMessage: string | undefined;
  testDelayTicks: number = 0;
  testMeKey: string | undefined;
  testData!: any;
  constructor() { }
  public setTestData(testData: any): void {
    this.testData = testData;
  }
  public setTestErrorMessage(errorMessage?: string | undefined): void {
    this.testErrorMessage = errorMessage;
  }
  public setTestDelayTicks(testDelayTicks: number): void {
    this.testDelayTicks = Math.max(0, testDelayTicks);
  }
  public setTestMeKey(testMeKey?: string | undefined): void {
    this.testMeKey = testMeKey;
  }
  public userIsFriend(me: IMe, user: IUser | undefined): user is IFriend {
    if (user)
      for (let i = 0; i < me.friends.length; i++)
        if (me.friends[i] === user)
          return true;
    return false;
  }
  public userIsJoin(user: IUser | undefined): user is IJoin {
    return (user !== undefined && user.id === joinId);
  }
  public createJoin(join?: IJoin): IJoin {
    return {
      id: joinId,
      experience: join ? join.experience : 0
    };
  }
  public createAdd(add?: IAdd): IAdd {
    return {
      id: addId
    };
  }
  public getExperienceLevels(): IExperience[] {
    return [
      { experience: 0, title: "Noob", description: "Experience not required" },
      { experience: 2, title: "Rookie", description: "Must have completed at least 2 games." },
      { experience: 5, title: "Veteran", description: "Must have completed at least 5 games." },
      { experience: 10, title: "Expert", description: "Must have completed at least 10 games." },
      { experience: 20, title: "Master", description: "Must have completed at least 20 games." },
    ];
  }
  public signIn(email: string, password: string): Observable<IMe> {
    email && password;
    return timer(this.testDelayTicks)
      .pipe(take(1))
      .pipe(flatMap(() => {
        return this.testErrorMessage ?
          throwError(this.testErrorMessage) :
          of(this.testMeKey && this.testData.mes[this.testMeKey] ? this.testData.mes[this.testMeKey] : this.testData.mes.basic);
      }));
  }
  public vetNewFriend(meId: string, name: string, email: string): Observable<IFriend> {
    meId;
    return timer(this.testDelayTicks)
      .pipe(take(1))
      .pipe(flatMap(() => {
        return this.testErrorMessage ?
          throwError(this.testErrorMessage) :
          of({
            id: this.generateUuid(),
            name: name,
            email: email,
            selected: 0
          });
      }));
  }
  private generateUuid(): string {
    return "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/x/g, function () {
      return (Math.floor(Math.random() * 16)).toString(16);
    });
  }
}
