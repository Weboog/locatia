import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  switches = [
    {label: 'action', values: ['louer', 'acheter']}
  ];

  constructor() { }

  getSwitches() {
    return this.switches.slice();
  }
}
