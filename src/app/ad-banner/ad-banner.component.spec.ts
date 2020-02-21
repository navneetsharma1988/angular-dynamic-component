import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component } from "@angular/core";
import { ComponentFactoryResolver } from "@angular/core";
import { AdBannerComponent } from "./ad-banner.component";

@Component({
  selector: "stub",
  templateUrl: "<div>My Name is Admiral</div>"
})
export class stubComponent {}

describe("AdBannerComponent", () => {
  let component: AdBannerComponent;
  let fixture: ComponentFixture<AdBannerComponent>;
  beforeEach(() => {
    const componentFactoryResolverStub = () => ({
      resolveComponentFactory: component => ({})
    });

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AdBannerComponent, stubComponent],
      providers: [
        {
          provide: ComponentFactoryResolver,
          useFactory: componentFactoryResolverStub
        }
      ]
    });
    fixture = TestBed.createComponent(AdBannerComponent);
    component = fixture.componentInstance;
  });

  it("can load instance", () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnInit", () => {
    it("makes expected calls", () => {
      spyOn(component, "loadComponents").and.callFake(() => {});
      spyOn(component, "getAds").and.callFake(() => {});
      fixture.detectChanges();
      expect(component.loadComponents).toHaveBeenCalled();
      expect(component.getAds).toHaveBeenCalled();
    });
  });

  describe("loadComponents", () => {
    it("makes expected calls", () => {
      component.currentAdIndex = 0;
      component.ads = [{ component: stubComponent, data: {} }];
      
      const componentFactoryResolverStub: ComponentFactoryResolver = fixture.debugElement.injector.get(
        ComponentFactoryResolver
      );

      spyOn(
        componentFactoryResolverStub,
        "resolveComponentFactory"
      ).and.callThrough();

      component.loadComponents();

      expect(
        componentFactoryResolverStub.resolveComponentFactory
      ).toHaveBeenCalled();
    });
  });

  describe("getAds", () => {
    it("makes expected calls", () => {
      spyOn(component, "loadComponents").and.callThrough();
      component.getAds();
      expect(component.loadComponents).toHaveBeenCalled();
    });
  });
});
