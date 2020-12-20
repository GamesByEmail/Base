import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionTitleComponent } from './option-title.component';

describe('OptionTitleComponent', () => {
  let component: OptionTitleComponent;
  let fixture: ComponentFixture<OptionTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
