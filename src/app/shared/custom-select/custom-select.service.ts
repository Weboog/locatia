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
    // tslint:disable-next-line:max-line-length
    { icon: 'assets/svg/location.svg', alias: 'tout le maroc', label: 'city', options:
        ['tout le maroc', 'casablanca', 'marrakech', 'agadir', 'rabat', 'salé', 'témara', 'kenitra', 'tanger', 'chefchaouen', 'el jadida', 'fès', 'meknès', 'oujda', 'tètouan', 'saidia', 'el houceima']
    },
    { icon: 'assets/svg/type.svg', alias: 'tout type', label: 'type', options: ['tout type', 'appartement', 'duplexe', 'maison', 'ryad', 'villa'] }
  ];
  constructor() { }

  getSelectOptions() {
    return this.selectArray.slice();
  }
}
