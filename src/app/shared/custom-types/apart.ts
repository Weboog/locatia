import {Carousel} from '../carousel/carousel';

export interface Apart {

  id: string;
  price: number;
  type: string;
  location: string;
  phone: string;
  specs: {
    surface: number,
    pieces: number,
    rooms: number
  };
  extras?: {
    virtualTourLink: string;
    promo: {
      old: number,
      new: number
    },
    offer: boolean
  };
  images: Carousel[];
  description: string;
}
