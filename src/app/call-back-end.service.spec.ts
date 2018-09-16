import { TestBed, inject } from '@angular/core/testing';

import { CallBackEndService } from './call-back-end.service';

describe('CallBackEndService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallBackEndService]
    });
  });

  it('should be created', inject([CallBackEndService], (service: CallBackEndService) => {
    expect(service).toBeTruthy();
  }));
});
