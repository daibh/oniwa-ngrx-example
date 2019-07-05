import { TestBed } from '@angular/core/testing';

import { ActionTrackingService } from './action-tracking.service';

describe('ActionTrackingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActionTrackingService = TestBed.get(ActionTrackingService);
    expect(service).toBeTruthy();
  });
});
