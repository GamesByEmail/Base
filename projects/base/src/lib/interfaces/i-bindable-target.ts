import { ElementRef } from "@angular/core";
import { Rectangle2D } from "@packageforge/geometry2d";

export interface IBindableTarget {
  bindElement(elementRef: ElementRef): Rectangle2D | undefined;
  unbindElement(elementRef: ElementRef): void;
}