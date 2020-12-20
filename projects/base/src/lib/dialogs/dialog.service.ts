import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { FormGroup, AbstractControl } from '@angular/forms';
import { DialogData } from './dialog-data';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor() { }

  public createDialogConfig<T>(data: T|undefined, width: number): MatDialogConfig<T>
  public createDialogConfig<T>(data: T|undefined, width: number, approximateHeight: number | undefined, positionNear: HTMLElement | undefined): MatDialogConfig<T>
  public createDialogConfig<T>(data: T|undefined, width: number, height?: number, positionNear?: HTMLElement | undefined): MatDialogConfig<T> {
    const config = new MatDialogConfig<T>();
    if (positionNear) {
      const viewportSize = { width: document.documentElement!.clientWidth, height: document.documentElement!.clientHeight };
      const buttonRect = positionNear.getBoundingClientRect();
      const dialogRect = { top: 0, left: 0, width: width, height: typeof(height)==="number" ? height : width };
        dialogRect.top = Math.floor(buttonRect.top + buttonRect.height / 2 - dialogRect.height / 2);
      if (dialogRect.top + dialogRect.height > viewportSize.height)
        dialogRect.top = viewportSize.height - dialogRect.height;
      if (dialogRect.top < 0)
        dialogRect.top = 0;
      dialogRect.left = buttonRect.left;
      if (dialogRect.left + dialogRect.width > viewportSize.width)
        dialogRect.left = buttonRect.right - dialogRect.width;
      if (dialogRect.left < 0)
        dialogRect.left = 0;
      config.position = {
        top: dialogRect.top + "px",
        left: dialogRect.left + "px"
      };
    }
    config.width = width + 'px';
    config.data = data;
    config.panelClass="GamesByEmail-Dialog";
    return config;
  }
  public formHasError(form: FormGroup, controlNames: string, validatorName?: string, force?: boolean): boolean {
    const controlNameList = controlNames.split(',');
    let hasError: boolean = false;
    for (let i = 0; i < controlNameList.length; i++) {
      const control: AbstractControl | null = form.get(controlNameList[i]);
      if (control && control !== null && (force || control.touched) && (validatorName ? control.getError(validatorName) : !control.valid))
        hasError = true;
    }
    return hasError;
  }
  public getFormValue<T>(form:FormGroup,controlName:string,defaultValue:T):T{
    const control: AbstractControl | null = form.get(controlName);
    return control ? control.value : defaultValue;
  }
  public synchDataToForm(data:DialogData,form:FormGroup):void{
    if (data) {
      let props:string[]=Object.getOwnPropertyNames(data);
      for (let i:number=0;i<props.length;i++) {
        const control: AbstractControl | null = form.get(props[i]);
        if (control)
          data[props[i]]=control.value;
      }
    }

  }
}
