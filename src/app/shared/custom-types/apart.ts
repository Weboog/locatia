import {Carousel} from '../carousel/carousel';

export interface Apart {

  id: string;
  oldPrice?: number;
  price: number;
  type: string;
  location: string;
  phone: string;
  gps?: string;
  specs: {
    surface: number,
    pieces: number,
    rooms: number,
    floors?: number
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
