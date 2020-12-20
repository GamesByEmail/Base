import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';

import { RulesComponent } from './rules.component';
import { IconModule } from '../../modules/icon.module';


@NgModule({
  declarations: [
    RulesComponent
  ],
  exports: [
    RulesComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    IconModule
  ],
  providers:[
    AsyncPipe
  ]
})
export class RulesModule {
}
