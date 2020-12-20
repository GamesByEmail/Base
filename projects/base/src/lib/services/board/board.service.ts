import { Injectable } from '@angular/core';
import { Point2D, Rectangle2D, IPoint2D } from '@packageforge/geometry2d';
import { Observable, throwError, Observer, of } from 'rxjs';

const speed = 0.640;// px/ms
const minDuration = 100;// ms
const maxDuration = 300;// ms

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  getTranslation(target: SVGElement): Point2D {
    if (target instanceof SVGSVGElement)
      return new Point2D(parseFloat(target.getAttribute("x") || "0"), parseFloat(target.getAttribute("y") || "0"));
    return (target.getAttribute("transform") || "").search(/translate\(\s*([\-\d\.]+)\s*?[\s,]\s*([\-\d\.]+)\s*\)/) >= 0 ? new Point2D(parseFloat(RegExp.$1), parseFloat(RegExp.$2)) : new Point2D(0, 0);
  }
  setTranslation(target: SVGElement, point: IPoint2D): void {
    if (target instanceof SVGSVGElement) {
      target.setAttribute("x", point.x.toString());
      target.setAttribute("y", point.y.toString());
      return;
    }
    target.setAttribute("transform", "translate(" + point.x + "," + point.y + ")");
  }
  getScale(target: SVGElement): Point2D {
    return (target.getAttribute("transform") || "").search(/scale\(\s*([\-\d\.]+)\s*?(:?[\s,]\s*([\-\d\.]+)\s*\))?/) >= 0 ? new Point2D(parseFloat(RegExp.$1), parseFloat(RegExp.$2 || RegExp.$1)) : new Point2D(1, 1);
  }
  moveToRect(target: SVGElement, toRect: Rectangle2D, duration?: number): Observable<void> {
    return this.moveBetweenRects(target, toRect, false, duration);
  }
  mergeFromLastRect(target: SVGElement, lastRect: Rectangle2D, duration?: number): Observable<void> {
    return this.moveBetweenRects(target, lastRect, true, duration);
  }
  moveBetweenRects(target: SVGElement, otherRect: Rectangle2D, reverse: boolean, duration?: number): Observable<void> {
    if (target instanceof SVGSVGElement)
      return this.moveSvgBetweenRects(target, otherRect, reverse, duration);
    return Observable.create((observer: Observer<void>) => {
      const currRect = new Rectangle2D(target.getBoundingClientRect());
      if (currRect.equals(otherRect)) {
        observer.next(undefined);
        observer.complete();
        return;
      }
      const currTrans = this.getTranslation(target);
      const currScale = this.getScale(target);
      //console.log("currTrans", target.getAttribute("transform"), currTrans, currScale);
      console.log("target", target);
      target.setAttribute("transform", "translate(0 0)");
      const zeroZero = new Rectangle2D(target.getBoundingClientRect());
      target.setAttribute("transform", "translate(1000 0)");
      const thouZero = new Rectangle2D(target.getBoundingClientRect());
      console.log("zeroZero", zeroZero, thouZero);
      const delta = thouZero.origin().subtract(zeroZero.origin());
      const mag = delta.magnitude();
      if (mag === 0) {
        console.error("scaled too small");
        return throwError("scaled too small");
      }
      const angle = delta.atan2();
      const targetTrans = otherRect.origin().subtract(zeroZero).scale(1000 / mag).rotate(-angle);
      const targetScale = new Point2D(otherRect.width / zeroZero.width, otherRect.height / zeroZero.height);
      targetScale.rotate(-angle);
      const fromTrans = reverse ? targetTrans : currTrans;
      const toTrans = reverse ? currTrans : targetTrans;
      const fromScale = reverse ? targetScale : currScale;
      const toScale = reverse ? currScale : targetScale;
      let subscription = this.animateTransform(target, fromTrans, toTrans, fromScale, toScale, duration).subscribe(() => {
        observer.next(undefined);
        observer.complete();
        if (subscription)
          subscription = <any>subscription.unsubscribe();
      });
      return () => {
        if (subscription)
          subscription = <any>subscription.unsubscribe();
      };
    });
  }
  animateTransform(target: SVGElement, fromTranslate: Point2D, toTranslate: Point2D, fromScale: Point2D, toScale: Point2D, duration?: number): Observable<void> {
    return Observable.create((observer: Observer<void>) => {
      if (typeof (duration) !== "number") {
        const distance = fromTranslate.clone().subtract(toTranslate).magnitude();
        duration = Math.max(minDuration, Math.min(maxDuration, distance / speed));
      }
      if (duration <= 0) {
        this.setTransform(target, toTranslate, toScale);
        observer.next(undefined);
        observer.complete();
        return;
      }
      const transDiff = toTranslate.clone().subtract(fromTranslate);
      const scaleDiff = toScale.clone().subtract(fromScale);
      const startTime = window.performance.now();
      let frameHandle: number | undefined;
      const step = (time: number) => {
        const ratio = Math.min((time - startTime) / duration!, 1);
        if (ratio === 1) {
          frameHandle = undefined;
          this.setTransform(target, toTranslate, toScale);
          observer.next(undefined);
          observer.complete();
          return;
        }
        this.setTransform(target, fromTranslate.clone().add(transDiff.clone().scale(ratio)), fromScale.clone().add(scaleDiff.clone().scale(ratio)));
        frameHandle = window.requestAnimationFrame(step);
      };
      this.moveToTopOfStack(target);
      this.setTransform(target, fromTranslate.clone().add(transDiff.clone().scale(0.3)), fromScale);
      frameHandle = window.requestAnimationFrame(step);
      return () => {
        if (frameHandle)
          frameHandle = <any>window.cancelAnimationFrame(frameHandle);
      };
    });
  }
  setTransform(target: SVGElement, translate: Point2D, scale: Point2D) {
    target.setAttribute("transform", "translate(" + translate.x + " " + translate.y + ") scale(" + scale.x + " " + scale.y + ")");
  }
  moveSvgBetweenRects(target: SVGSVGElement, otherRect: Rectangle2D, reverse: boolean, duration?: number): Observable<void> {
    const currRect = new Rectangle2D(target.getBoundingClientRect());
    target.setAttribute("x", "0");
    target.setAttribute("y", "0");
    const zeroZero = new Rectangle2D(target.getBoundingClientRect());
    target.setAttribute("x", "1000");
    target.setAttribute("y", "1000");
    const thouThou = new Rectangle2D(target.getBoundingClientRect());

    if (zeroZero.x === thouThou.x) {
      console.error("X scaled too small");
      return throwError("X scaled too small");
    }
    if (zeroZero.y === thouThou.y) {
      console.error("Y scaled too small");
      return throwError("Y scaled too small");
    }
    const scale = new Point2D(1000 / (thouThou.x - zeroZero.x), 1000 / (thouThou.y - zeroZero.y));
    const fromRect = reverse ? otherRect : currRect;
    const toRect = reverse ? currRect : otherRect;

    target.setAttribute("x", ((toRect.x - zeroZero.x) * scale.x).toString());
    target.setAttribute("y", ((toRect.y - zeroZero.y) * scale.y).toString());
    //target.setAttribute("width",(toRect.width*scale.x).toString());
    //target.setAttribute("height",(toRect.height*scale.y).toString());

    return of();
  }
  moveToTopOfStack(node: SVGElement): void {
    const ns = node.namespaceURI;
    while (node.parentNode && node.parentNode.namespaceURI === ns) {
      if (node.parentNode.lastChild !== node)
        node.parentNode.appendChild(node);
      node = <any>node.parentNode;
    }
  }

}