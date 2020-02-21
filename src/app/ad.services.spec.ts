import { TestBed } from '@angular/core/testing';
import { AdService } from './ad.services';
describe('AdService', () => {
  let service: AdService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AdService] });
    service = TestBed.get(AdService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
