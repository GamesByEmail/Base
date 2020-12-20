export class StateStore<T> {
  private states: any[] = [];
  get depth(): number {
    return this.states.length - 1;
  }
  push(state: T): void {
    this.states.unshift(state);
  }
  pop(depth: number): T | undefined {
    if (depth < this.states.length) {
      const state: T = this.states[depth];
      this.states.splice(0, depth + 1);
      return state;
    }
    return;
  }
  commit() {
    this.states.length = 0;
  }
}