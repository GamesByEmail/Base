import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTabsModule } from '@angular/material/tabs';

import { TestComponent } from "./test.component";

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule
  ],
  declarations: [
    TestComponent
  ],
  exports: [
    TestComponent
  ]
})
export class TestModule {
}
