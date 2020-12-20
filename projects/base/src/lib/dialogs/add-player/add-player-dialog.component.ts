import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { DialogService } from '../dialog.service';
import { GameFormService } from '../../services/game-form/game-form.service';
import { IMe } from '../../interfaces/i-me';
import { IFriend } from '../../interfaces/i-friend';

/* This is the close dialog component. */
@Component({
  templateUrl: './add-player-dialog.component.html',
  styleUrls: ['./add-player-dialog.component.css']
})
export class AddPlayerDialogComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  vetSubscription: Subscription | undefined;
  vettingError: string | undefined;

  /* The constructor gets the dialog reference and gets the open parameter data. */
  constructor(
    public dialogRef: MatDialogRef<AddPlayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private me: IMe,
    private formBuilder: FormBuilder,
    private dialogService: DialogService,
    private gameFormService: GameFormService
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["test", [Validators.required]],
      email: ["test@test", [Validators.required, Validators.email]]
    });
  }

  ngOnDestroy() {
    this.vetSubscription && (this.vetSubscription = <any>this.vetSubscription.unsubscribe());
  }

  /* This method closes the dialog, returning a response. */
  close(response?: IFriend | undefined): void {
    this.dialogRef.close(response);
  }

  hasError(controlNames: string, validatorName?: string | undefined, force?: boolean): boolean {
    return this.dialogService.formHasError(this.form, controlNames, validatorName, force);
  }
  picked(): void {
    if (this.vettingError)
      return this.close();
    const nameCtrl = this.form.get("name");
    const emailCtrl = this.form.get("email");
    if (!nameCtrl || !emailCtrl)
      throw ("Controls disappeared!");
    this.vetSubscription = this.gameFormService.vetNewFriend(this.me.id, nameCtrl.value, emailCtrl.value).subscribe((friend: IFriend): void => {
      this.vetSubscription = undefined;
      let insertIndex = this.me.friends.length;
      for (let i = 0; i < this.me.friends.length; i++)
        if (friend.id === this.me.friends[i].id) {
          insertIndex = -1;
          break;
        }
      //      while (insertIndex > 0 && this.me.friends[insertIndex - 1].selected === 0)
      //        insertIndex--;
      if (insertIndex >= 0)
        this.me.friends.splice(insertIndex, 0, friend);
      this.close(friend);
    }, (vettingError: string): void => {
      this.vetSubscription = undefined;
      this.vettingError = vettingError;
    });
  }


}