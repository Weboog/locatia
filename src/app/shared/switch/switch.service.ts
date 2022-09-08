import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  switches = [
    {label: 'action', values: ['louer', 'acheter']}
  ];

  constructor() { }

  setChecked(index: number) {
    const sw = document.querySelectorAll('input[type=radio]').item(index) as HTMLInputElement;
    sw.setAttribute('checked', String(true));
    // console.log('item to check is ' + index);
  }

  getSwitches() {
    return this.switches.slice();
  }
}
