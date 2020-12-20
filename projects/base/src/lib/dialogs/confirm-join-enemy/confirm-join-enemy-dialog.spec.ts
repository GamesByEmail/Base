import { TestBed } from '@angular/core/testing';

import { ConfirmJoinEnemyDialog } from './confirm-join-enemy-dialog';

describe('ConfirmJoinEnemyDialog', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmJoinEnemyDialog = TestBed.get(ConfirmJoinEnemyDialog);
    expect(service).toBeTruthy();
  });
});
