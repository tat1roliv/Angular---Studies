import { TestBed } from '@angular/core/testing';

import { DiretivaNgifServiceService } from './diretiva-ngif-service.service';

describe('DiretivaNgifServiceService', () => {
  let service: DiretivaNgifServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretivaNgifServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
