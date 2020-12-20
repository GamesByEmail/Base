import { TestBed } from '@angular/core/testing';

import { AddPlayerDialog } from './add-player-dialog';

describe('AddPlayerDialog', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPlayerDialog = TestBed.get(AddPlayerDialog);
    expect(service).toBeTruthy();
  });
});
