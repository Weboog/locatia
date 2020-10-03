import { Injectable } from '@angular/core';
import { SlideItem } from './slide-item';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  cardsArray = [];

  public getSlides(component, data) {
    for (const item of data) {
      this.cardsArray.push(new SlideItem(component, item));
    }
    return this.cardsArray;
  }
}
