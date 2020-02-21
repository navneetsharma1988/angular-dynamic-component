import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ViewContainerRef } from '@angular/core';
import { AdDirective } from './ad.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div ad-host>Default</div>
  `
})
class TestComponent {}

describe('AdDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;
  beforeEach(() => {
    const viewContainerRefStub = () => ({});
    TestBed.configureTestingModule({
      declarations: [AdDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(AdDirective)
    );
    bareElement = fixture.debugElement.query(By.css(':not([ad-host])'));
  });
  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });
  it('should have 1 element(s) with directive', () => {
    expect(elementsWithDirective.length).toBe(1);
  });
});
