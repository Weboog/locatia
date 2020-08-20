import { Injectable } from '@angular/core';
import { SlideItem } from './slide-item';

@Injectable({
  providedIn: 'root',
})
export class SliderService {

  cardsArray = [];

  public getSlides(component, data) {

    for (const dt of data) {
      this.cardsArray.push(new SlideItem(component, dt));
      console.log(data);
    }
    return this.cardsArray;

    // data.forEach((item) => {
      // this.cardsArray.push(new SlideItem(component, item));
    // });

    // return [
    //   new SlideItem(component, data[0]),
    //   new SlideItem(component, data[1]),
    //   new SlideItem(component, data[2]),
    // ];
  }
}
