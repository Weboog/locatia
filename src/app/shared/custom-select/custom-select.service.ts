import {EventEmitter, Injectable, Output} from '@angular/core';
import {Subject} from 'rxjs';

export interface SelectOption {
  icon?: string;
  alias: string;
  label: string;
  options: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CustomSelectService {
  @Output() onDroppedOne = new EventEmitter<string>();
  onReset = new Subject<any>();
  selectArray = [
    { icon: 'assets/svg/location.svg', alias: 'tout le maroc', label: 'city', options: ['casablanca', 'marrakech', 'agadir', 'rabat', 'chefchaouen', 'kenitra'] },
    { icon: 'assets/svg/type.svg', alias: 'appartement', label: 'type', options: ['appartement', 'duplexe', 'maison', 'ryad', 'villa'] }
  ];
  constructor() { }

  getSelectOptions() {
    return this.selectArray.slice();
  }
}
