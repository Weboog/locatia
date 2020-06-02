import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartPageService {

  destinations: string[] = ['casablanca', 'marrakech', 'agadir', 'rabat', 'salé', 'témara', 'kénitra', 'tanger', 'chefchaouen', 'el jadida', 'fès', 'meknès', 'oujda', 'tètouan', 'saidia', 'el houceïma'];
  constructor() { }

  getDestinations() {
    return this.destinations.slice();
  }
}
