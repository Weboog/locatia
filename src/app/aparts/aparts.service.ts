import {Injectable} from '@angular/core';
import {Apart} from '../shared/custom-types/apart';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApartsService {
  aparts: Apart[];
  featuredAparts = [
    {
      id: '',
      human_id: 'B-0387',
      oldPrice: 2200,
      price: 1900,
      period: 'mois',
      property: 'maison',
      city: 'kenitra',
      phone: '0626629199',
      surface: 80,
      pieces: 4,
      rooms: 3,
      floors: 2,
      images: [
        {id: 1, src: 'assets/media/image4-3.jpg'},
        {id: 2, src: 'http://deelay.me/1000/https://cdn.pixabay.com/photo/2015/03/26/09/42/bedroom-690129_960_720.jpg'},
        {id: 3, src: 'https://cdn.pixabay.com/photo/2015/10/12/15/00/room-984076_960_720.jpg'},
        {id: 4, src: 'https://cdn.pixabay.com/photo/2020/03/09/23/59/istanbul-4917447_960_720.jpg'},
      ],
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: '',
      human_id: 'C-0037',
      price: 3400,
      period: 'mois',
      property: 'duplexe',
      city: 'casablanca',
      phone: '0626629199',
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
      ],
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: '',
      human_id: 'D-4033',
      price: 600,
      period: 'nuité',
      property: 'villa',
      city: 'rabat',
      phone: '0626629199',
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
      ],
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];
  registeredAparts: Apart[] = [];

  constructor(private httpClient: HttpClient) { }

  // http://db-services.web/apart/${id}
  // https://db-services.incoloria.com/apart/${id}
  getApart(id: string) {
    return this.httpClient.get(`http://db-services.web/apart/${id}`);
  }

  getAparts() {
    // return this.httpClient.get('https://db-services.incoloria.com/apart/');
    return this.aparts.slice();
  }

  getFeatured() {
    return this.featuredAparts.slice();
  }

  getRegisteredAparts( indexes: string[]) {
    this.registeredAparts = [];
    indexes.forEach( id => {
      this.registeredAparts.push(this.aparts.find( apart => {
        return apart.id === id;
      }));
    });
    return this.registeredAparts.slice();
  }
  getDescription(id: number) {
    return this.aparts[id].description;
  }

  incrementViewCount(id: string) {
    return this.httpClient.get(`https://db-services.incoloria.com/apart/increment/${id}`);
  }
}
