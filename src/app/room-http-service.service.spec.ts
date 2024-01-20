import { TestBed } from '@angular/core/testing';

import { RoomHttpServiceService } from './room-http-service.service';

describe('RoomHttpServiceService', () => {
  let service: RoomHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
