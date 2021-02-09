import {Carousel} from '../carousel/carousel';

export interface Apart {

  id: string;
  human_id: string;
  oldPrice?: number;
  price: number;
  period: string;
  property: string;
  city: string;
  address?: string[];
  zip?: number;
  phone: string;
  // agent?: {name: string, phone: string, agency: string};
  location?: {lat: string, lng: string};
  surface: number;
  pieces: number;
  rooms: number;
  floors?: number;
  extras?: {
    virtualTourLink: string;
    promo: {
      old: number,
      new: number
    },
    offer: boolean
  };
  images?: Carousel[];
  description: string;
  external?: string[];
  internal?: string[];
  conditions?: string[];
}
