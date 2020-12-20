import { Component, Input } from '@angular/core';

@Component({
  selector: 'gamesbyemail-base-optiontitle',
  templateUrl: './option-title.component.html',
  styleUrls: ['./option-title.component.css']
})
export class OptionTitleComponent {
  @Input() type: string | undefined;
  @Input() info: boolean | undefined;
  iconName(): string {
    return this.type === undefined || this.type.toLowerCase() === "default" ? "outlined_flag" : "flag";
  }
}
