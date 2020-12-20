import { StateStore } from './state-store';

export class MoveLog<T, M> {
  private moves: T[] = [];
  private stateStore = new StateStore<T[]>();
  constructor() {
  }
  push(move: T) {
    this.moves.push(move);
  }
  modify(modifications: M) {
    const props = Object.getOwnPropertyNames(modifications);
    const move = <any>this.moves[this.moves.length - 1];
    for (let i = 0; i < props.length; i++)
      move[props[i]] = (<any>modifications)[props[i]];
  }
  get(): T[] {
    return this.moves.slice(0);
  }
  save() {
    this.stateStore.push(this.moves.slice(0));
  }
  restore(depth: number) {
    const moves = this.stateStore.pop(depth);
    if (!moves)
      throw "Missing log restore state";
    this.moves = moves;
  }
  commit() {
    this.stateStore.commit();
  }
  getState(){
    return this.moves.slice(0);
  }
  clear(){
    this.moves.length=0;
  }
}