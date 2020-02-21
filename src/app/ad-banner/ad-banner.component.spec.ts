import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component } from "@angular/core";
import { ComponentFactoryResolver } from "@angular/core";
import { AdBannerComponent } from "./ad-banner.component";
import { AdDirective } from '../ad.directive';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'dynamic-component',
  template: `Dynamic component`
})
export class DynamicComponent  {}

describe("AdBannerComponent", () => {

  let component: AdBannerComponent;
  let fixture: ComponentFixture<AdBannerComponent>;
  let componentFactoryResolver: ComponentFactoryResolver ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdBannerComponent, AdDirective, DynamicComponent]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [DynamicComponent]
      }
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBannerComponent);
    component = fixture.componentInstance;
    component.ads = [{component: DynamicComponent, data: {} }];
    componentFactoryResolver =  fixture.debugElement.injector.get(ComponentFactoryResolver);
    fixture.detectChanges();
  })

  it("can load instance", () => {
    console.log(fixture.debugElement.componentInstance.adHost)
    expect(component).toBeTruthy();
  });

  // it('should have dynamic content loaded', () => {
  //   expect(fixture.debugElement.componentInstance).toBe(1);
  // })
});
