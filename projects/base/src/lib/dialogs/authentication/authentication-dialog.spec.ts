import { TestBed } from '@angular/core/testing';

import { AuthenticationDialog } from './authentication-dialog';

describe('AuthenticationDialog', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationDialog = TestBed.get(AuthenticationDialog);
    expect(service).toBeTruthy();
  });
});
