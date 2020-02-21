import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AdService } from './ad.services';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    const adServiceStub = () => ({ getAds: () => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [{ provide: AdService, useFactory: adServiceStub }]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const adServiceStub: AdService = fixture.debugElement.injector.get(
        AdService
      );
      spyOn(adServiceStub, 'getAds').and.callThrough();
      component.ngOnInit();
      expect(adServiceStub.getAds).toHaveBeenCalled();
    });
  });
});
