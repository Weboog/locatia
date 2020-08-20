import { Injectable } from '@angular/core';
import { SlideItem } from './slide-item';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  public getSlides(component, data) {
    data.forEach((item) => {
      return [new SlideItem(component, item)];
    });
    return [new SlideItem(component, data[0]), new SlideItem(component, data[1]), new SlideItem(component, data[2])];
  }
}
