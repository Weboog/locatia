import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  favChange = new Subject<number>();
  constructor() { }

  getLength() {
    return this.getRegistered().registered.length;
  }

  getRegistered(id?: string) {
    const registeredAparts = localStorage.getItem('registeredAparts');
    if (registeredAparts) {
      if (id !== undefined) {
        const jsonObject = JSON.parse(registeredAparts);
        return jsonObject.registered.find(item => {
          return item === id;
        });
      }
      return JSON.parse(registeredAparts);
    }
    return {registered: 0};
  }

  registerApart(id: string) {
    const registeredAparts = this.getRegistered();
    if (registeredAparts === undefined) {
      localStorage.setItem('registeredAparts', `{"registered": [ "${id}" ]}`);
      return true;
    }
    if (this.getRegistered(id) === undefined) {
      // Register new apart
      registeredAparts.registered.push(id);
      localStorage.setItem('registeredAparts', JSON.stringify(registeredAparts));
    } else {
      // Delete found apart
      const i = registeredAparts.registered.indexOf(id);
      registeredAparts.registered.splice(i, 1);
      localStorage.setItem('registeredAparts', JSON.stringify(registeredAparts));
    }
    this.favChange.next(this.getLength());
  }

  /*deleteApart(id: string) {
    const registeredAparts = this.getRegistered();
    const i = registeredAparts.registered.indexOf(id);
    registeredAparts.registered.splice(i, 1);
    localStorage.setItem('registeredAparts', JSON.stringify(registeredAparts));
    this.favChange.next(this.getLength());
  }*/
}
