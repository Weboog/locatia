import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { SliderDirective } from './slider.directive';
import { SliderService } from './slider.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  providers: [SliderService],
  declarations: [SliderComponent, SliderDirective],
  exports: [SliderComponent],
  entryComponents: [],
})
export class SliderModule {
  constructor() {}
}
