import {AdBannerComponent} from "./ad-banner.component";
import {ComponentFactoryResolver, ComponentRef, ViewContainerRef} from "@angular/core";
import {AdItem} from "../ad-item";
import {HeroProfileComponent} from "../hero-profile/hero-profile.component";
import {AdDirective} from "../ad.directive";
import {AdComponent} from "../ad.component";


describe('AdBannerComponent', () => {
  let component: AdBannerComponent;
  let componentFactoryResolverSpy: ComponentFactoryResolver;
  let viewContainerRefSpy: ViewContainerRef;
  let componentRef: ComponentRef<AdComponent> = {instance: {data: undefined}} as ComponentRef<AdComponent>;

  beforeEach(() => {
    componentFactoryResolverSpy = jasmine.createSpyObj('', ['resolveComponentFactory']);
    viewContainerRefSpy = jasmine.createSpyObj('ViewContainerRef', ['clear', 'createComponent']);

    (viewContainerRefSpy.createComponent as jasmine.Spy).and.returnValue(componentRef);

    component = new AdBannerComponent(componentFactoryResolverSpy);
    component.adHost = new AdDirective(viewContainerRefSpy);
    component.ads = [new AdItem(Object, {value: 1}), new AdItem(Object, {value: 2})];
  });

  describe('loadComponents', () => {

    it('should select the first element if in in initial state', function () {
      component.loadComponents();

      expect(component.currentAdIndex).toEqual(0);
    });

    it('should increment index and select next element', function () {
      component.currentAdIndex = 0;

      component.loadComponents();

      expect(component.currentAdIndex).toEqual(1);
    });

    it('should select the first element again if last element has been selected', function () {
      component.currentAdIndex = 1;

      component.loadComponents();

      expect(component.currentAdIndex).toEqual(0);
    });

    it('should assign the item data to the component reference', function () {
      component.loadComponents();

      expect(componentRef.instance.data).toEqual({value: 1});
    });

  });

});

