import {EventEmitter, Injectable, Output} from '@angular/core';
import {Subject} from 'rxjs';

export interface SelectOption {
  alias: string;
  label: string;
  options: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CustomSelectService {
  @Output() onDroppedOne = new EventEmitter<string>();
  // @Output() onReset = new EventEmitter<any>();
  onReset = new Subject<any>();
  localFilters = [
    { alias: 'type de location', label: 'city', options: ['tout type', 'location classique', 'location de vacances', 'location temporaire', 'location commerciale'] },
    { alias: 'appartement', label: 'type', options: ['appartement', 'duplexe', 'maison', 'ryad', 'villa'] }
  ];
  selectArray = [
    { alias: 'tout le maroc', label: 'city', options: ['casablanca', 'marrakech', 'agadir', 'rabat', 'chefchaouen', 'kenitra'] },
    { alias: 'location', label: 'action', options: ['location', 'achat'] },
    { alias: 'appartement', label: 'type', options: ['appartement', 'duplexe', 'maison', 'ryad', 'villa'] }
  ];
  constructor() { }

  getSelectOptions() {
    return this.selectArray.slice();
  }

  getLocalFilters() {
    return this.localFilters.slice();
  }
}
