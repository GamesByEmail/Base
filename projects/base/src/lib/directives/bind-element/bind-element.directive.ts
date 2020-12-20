import { Directive, Input, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { IBindableTarget } from '../../interfaces/i-bindable-target';
import { Deferred } from '@packageforge/deferred';
import { Rectangle2D } from '@packageforge/geometry2d';
import { BoardService } from '../../services/board/board.service';

@Directive({
  selector: '[bindElement]'
})
export class BindElementDirective implements AfterViewInit, OnDestroy {
  target:IBindableTarget|undefined;
  @Input('bindElement') set _target(value:IBindableTarget|undefined){
    if (value!==this.target) {
      this.target=value;
      this.doBind();
    }
  }
  initDefer=new Deferred();
  constructor(private e:ElementRef<SVGElement>,private boardService:BoardService) { 
  }
  ngAfterViewInit(): void {
    this.initDefer.resolve();
    this.doBind();
  }
  doBind(){
    this.initDefer.promise.then(()=>{
      let lastRect:Rectangle2D|undefined;
      if (this.target && (lastRect=this.target.bindElement(this.e)))
        window.requestAnimationFrame(()=>{
          this.boardService.mergeFromLastRect(this.e.nativeElement,lastRect!,1000);
        });
    });
  }
  ngOnDestroy(): void {
    this.initDefer.reject();
    this.initDefer.promise.then(()=>{
      this.target && this.target.unbindElement(this.e);
    });
  }
}