import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[slideHost]',
})
export class SliderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
