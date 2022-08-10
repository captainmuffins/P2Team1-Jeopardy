import { TestBed } from '@angular/core/testing';

import { jeopardyservice } from './jeopardyservice';

describe('JeopardyServiceService', () => {
  let service: jeopardyservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(jeopardyservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
