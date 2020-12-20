import { Component, AfterViewInit, ElementRef, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'gamesbyemail-base-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements AfterViewInit, OnDestroy {
  @Input() gameName!: string;
  links: { title: string, depth: number, name: string }[] = [];
  menuOpen: boolean = false;
  isHandset: Observable<BreakpointState>;
  constructor(private cd: ChangeDetectorRef, private e: ElementRef, private breakpointObserver: BreakpointObserver) {
    this.isHandset = this.breakpointObserver.observe(Breakpoints.HandsetPortrait);
  }
  clickSubs: Subscription[] = [];
  ngAfterViewInit() {
    const links = (<HTMLElement>this.e.nativeElement).querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
      const name = links[i].getAttribute("name");
      if (name) {
        const parts = name.split(".");
        const title = "" + parts.pop();
        this.links.push({ title: title, depth: parts.length, name: name });
      }
      const href = links[i].getAttribute("href");
      if (href && href.startsWith("#"))
        this.clickSubs.push(fromEvent(links[i], "click")
          .subscribe(event => {
            this.linkClick(<MouseEvent>event, (<any>event).target.hash.substr(1));
          })
        );
    }
    this.cd.detectChanges();
  }
  ngOnDestroy(): void {
    while (this.clickSubs.length > 0)
      this.clickSubs.pop()!.unsubscribe();
  }
  linkClick(event: MouseEvent, name: string) {
    event.preventDefault();
    const target = (<HTMLElement>this.e.nativeElement).querySelector("[name='" + name + "']");
    if (target) {
      try {
        target.scrollIntoView({ behavior: "smooth" });
      } catch (e) {
        target.scrollIntoView();
      }
      this.menuOpen = false;
    }
  }
}
