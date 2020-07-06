import { Injectable } from '@angular/core';
import {Carousel} from './carousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  imgSources: Carousel[] = [
    {id: 1, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/apartment-2094699_960_720.jpg'},
    {id: 2, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716_960_720.jpg'},
    {id: 3, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/kitchen-2094707_960_720.jpg'},
    {id: 4, src: 'https://cdn.pixabay.com/photo/2018/05/25/17/52/home-3429674_960_720.jpg'},
    {id: 5, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/apartment-2094702_960_720.jpg'},
    {id: 6, src: 'https://cdn.pixabay.com/photo/2016/02/18/22/25/window-1208277_960_720.jpg'}
  ];
  constructor() { }
  getImgSources() {
    return this.imgSources.slice();
  }
}
