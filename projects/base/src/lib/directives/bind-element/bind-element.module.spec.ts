import { BindElementModule } from './bind-element.module';

describe('BindElementModule', () => {
  let bindElementModule: BindElementModule;

  beforeEach(() => {
    bindElementModule = new BindElementModule();
  });

  it('should create an instance', () => {
    expect(bindElementModule).toBeTruthy();
  });
});
