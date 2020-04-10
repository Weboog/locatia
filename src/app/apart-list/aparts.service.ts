import {Injectable} from '@angular/core';
import {Apart} from '../shared/custom-types/apart';

@Injectable({
  providedIn: 'root'
})
export class ApartsService {

  aparts: Apart[] = [
    {
      id: 'A-2701',
      price: 350,
      type: 'appartement',
      location: 'marrakech',
      phone: '0626629199',
      specs: {surface: 75, pieces: 3, rooms: 2},
      images: [
        {id: 1, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/apartment-2094699_960_720.jpg'},
        {id: 2, src: 'http://deelay.me/1000/https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716_960_720.jpg'},
        {id: 3, src: 'http://deelay.me/1000/https://cdn.pixabay.com/photo/2017/02/24/12/22/kitchen-2094707_960_720.jpg'},
        {id: 4, src: 'http://deelay.me/1000/https://cdn.pixabay.com/photo/2018/05/25/17/52/home-3429674_960_720.jpg'},
        {id: 5, src: 'http://deelay.me/1000/https://cdn.pixabay.com/photo/2017/02/24/12/22/apartment-2094702_960_720.jpg'},
        {id: 6, src: 'http://deelay.me/1000/https://cdn.pixabay.com/photo/2016/02/18/22/25/window-1208277_960_720.jpg'}
      ],
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 'B-0387',
      price: 250,
      type: 'maison',
      location: 'kenitra',
      phone: '0626629199',
      specs: {surface: 80, pieces: 4, rooms: 3},
      images: [
        {id: 1, src: 'https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_960_720.jpg'},
        {id: 2, src: 'http://deelay.me/1000/https://cdn.pixabay.com/photo/2015/03/26/09/42/bedroom-690129_960_720.jpg'},
        {id: 3, src: 'https://cdn.pixabay.com/photo/2015/10/12/15/00/room-984076_960_720.jpg'},
        {id: 4, src: 'https://cdn.pixabay.com/photo/2020/03/09/23/59/istanbul-4917447_960_720.jpg'},
      ],
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'C-0037',
      price: 400,
      type: 'duplexe',
      location: 'casablanca',
      phone: '0626629199',
      specs: {surface: 75, pieces: 3, rooms: 2},
      images: [
        {id: 1, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/apartment-2094699_960_720.jpg'},
        {id: 2, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716_960_720.jpg'},
        {id: 3, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/kitchen-2094707_960_720.jpg'},
        {id: 4, src: 'https://cdn.pixabay.com/photo/2018/05/25/17/52/home-3429674_960_720.jpg'},
        {id: 5, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/apartment-2094702_960_720.jpg'},
        {id: 6, src: 'https://cdn.pixabay.com/photo/2016/02/18/22/25/window-1208277_960_720.jpg'}
      ],
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'D-4033',
      price: 600,
      type: 'villa',
      location: 'rabat',
      phone: '0626629199',
      specs: {surface: 75, pieces: 3, rooms: 2},
      images: [
        {id: 1, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/apartment-2094699_960_720.jpg'},
        {id: 2, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716_960_720.jpg'},
        {id: 3, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/kitchen-2094707_960_720.jpg'},
        {id: 4, src: 'https://cdn.pixabay.com/photo/2018/05/25/17/52/home-3429674_960_720.jpg'},
        {id: 5, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/apartment-2094702_960_720.jpg'},
        {id: 6, src: 'https://cdn.pixabay.com/photo/2016/02/18/22/25/window-1208277_960_720.jpg'}
      ],
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];
  constructor() { }

  getAparts() {
    return this.aparts.slice();
  }

  getDescription(id: number) {
    return this.aparts[id].description;
  }
}
