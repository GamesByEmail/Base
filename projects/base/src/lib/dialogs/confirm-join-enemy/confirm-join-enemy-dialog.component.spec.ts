import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmJoinEnemyDialogComponent } from './confirm-join-enemy-dialog.component';

describe('ConfirmJoinEnemyDialogComponent', () => {
  let component: ConfirmJoinEnemyDialogComponent;
  let fixture: ComponentFixture<ConfirmJoinEnemyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmJoinEnemyDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmJoinEnemyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
