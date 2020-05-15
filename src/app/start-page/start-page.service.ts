import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartPageService {

  destinations: string[] = ['casablanca', 'marrakech', 'agadir', 'rabat', 'salé', 'témara', 'kenitra', 'tanger', 'chefchaouen', 'el jadida', 'fès', 'meknès', 'oujda', 'tètouan', 'saidia', 'el houceima'];
  constructor() { }

  getDestinations() {
    return this.destinations.slice();
  }
}
