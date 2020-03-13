import { Injectable } from '@angular/core';
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
      imgSrc: ['img-1.jpg'],
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
      imgSrc: ['img-1.jpg'],
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
      imgSrc: ['img-1.jpg'],
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
      imgSrc: ['img-1.jpg'],
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];
  constructor() { }

  getAparts() {
    return this.aparts.slice();
  }
}
