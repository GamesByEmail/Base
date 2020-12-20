import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule
  ]
})
export class IconModule {
  constructor(domSanitizer: DomSanitizer, matIconRegistry: MatIconRegistry) {
    matIconRegistry.addSvgIcon("warning", domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/alert/baseline-warning-24px.svg"));
    matIconRegistry.addSvgIcon("info", domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/action/baseline-info-24px.svg"));
    matIconRegistry.addSvgIcon("flag", domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/content/baseline-flag-24px.svg"));
    matIconRegistry.addSvgIcon("outlined_flag", domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/content/baseline-outlined_flag-24px.svg"));
    matIconRegistry.addSvgIcon("ok", domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/action/baseline-check_circle-24px.svg"));
    matIconRegistry.addSvgIcon("cancel", domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/navigation/baseline-cancel-24px.svg"));
    matIconRegistry.addSvgIcon("menu", domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/navigation/baseline-menu-24px.svg"));
  }
}
