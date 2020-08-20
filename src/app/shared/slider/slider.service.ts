import { Injectable } from '@angular/core';
import { SlideItem } from './slide-item';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  cardsArray = [];

  public getSlides(component, data) {
<<<<<<< HEAD
    data.forEach((item) => {
      return [new SlideItem(component, item)];
    });
    return [new SlideItem(component, data[0]), new SlideItem(component, data[1]), new SlideItem(component, data[2])];
=======
    for (const item of data) {
      this.cardsArray.push(new SlideItem(component, item));
      console.log(data);
    }
    return this.cardsArray;
>>>>>>> cb9f0865b85f320fafa8e3f0b6890c643bb61294
  }
}
