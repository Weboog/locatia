import { Injectable } from '@angular/core';
import { Apart } from '../shared/custom-types/apart';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {GlobalContants} from '../common/global-contants';

@Injectable({
  providedIn: 'root',
})
export class ApartsService {

  showHeaderBottomBorder = new Subject<boolean>();
  featuredAparts = [
    {
      human_id: 'B-0387',
      price: 1900,
      period: 'mois',
      city: 'kenitra',
      surface: 80,
      pieces: 4,
      rooms: 3,
      floors: 2,
      images: [
        {id: 1, src: 'assets/media/image4-3.jpg'},
        {id: 2, src: 'http://deelay.me/1000/https://cdn.pixabay.com/photo/2015/03/26/09/42/bedroom-690129_960_720.jpg'},
        {id: 3, src: 'https://cdn.pixabay.com/photo/2015/10/12/15/00/room-984076_960_720.jpg'},
        {id: 4, src: 'https://cdn.pixabay.com/photo/2020/03/09/23/59/istanbul-4917447_960_720.jpg'},
      ]
    },
    {
      human_id: 'C-0037',
      price: 3400,
      period: 'mois',
      city: 'casablanca',
      surface: 75,
      pieces: 3,
      rooms: 2,
      images: [
        {id: 1, src: 'assets/media/image4-3.jpg'},
        {id: 2, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716_960_720.jpg'},
        {id: 3, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/kitchen-2094707_960_720.jpg'},
        {id: 4, src: 'https://cdn.pixabay.com/photo/2018/05/25/17/52/home-3429674_960_720.jpg'},
        {id: 5, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/apartment-2094702_960_720.jpg'},
        {id: 6, src: 'https://cdn.pixabay.com/photo/2016/02/18/22/25/window-1208277_960_720.jpg'}
      ]
    },
    {
      human_id: 'D-4033',
      price: 600,
      period: 'nuité',
      city: 'rabat',
      surface: 75,
      pieces: 3,
      rooms: 2,
      images: [
        {id: 1, src: 'assets/media/image4-3.jpg'},
        {id: 2, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716_960_720.jpg'},
        {id: 3, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/kitchen-2094707_960_720.jpg'},
        {id: 4, src: 'https://cdn.pixabay.com/photo/2018/05/25/17/52/home-3429674_960_720.jpg'},
        {id: 5, src: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/apartment-2094702_960_720.jpg'},
        {id: 6, src: 'https://cdn.pixabay.com/photo/2016/02/18/22/25/window-1208277_960_720.jpg'}
      ]
    }
  ];
  registeredAparts: Apart[] = [];

  constructor(private httpClient: HttpClient) {}

  getApart(id: string) {
    return this.httpClient.get(`${GlobalContants.apiURL}/apart/${id}`);
  }

  getAparts() {
    return this.httpClient.get(`${GlobalContants.apiURL}/apart`);
    // return this.aparts.slice();
  }

  getRegisteredAparts(indexes: string[]) {
    this.registeredAparts = []; // Initialize array of already registered afavourites
    this.getAparts().subscribe((aparts: Apart[]) => {
      indexes.forEach((id) => {
        this.registeredAparts.push(
          aparts.find((apart) => {
            apart.images = [{id: 0, src: `${GlobalContants.gallery.remote}assets/media/gallery/${apart.id}/${apart.id}-0.jpg`}];
            return apart.id === id;
          })
        );
      });
    });
    return this.registeredAparts;
  }

  getDescription(id: number) {
    return this.registeredAparts[id].description;
  }

  incrementViewCount(id: string) {
    return this.httpClient.get(
      `${GlobalContants.apiURL}/apart/increment/${id}`
    );
  }
}
