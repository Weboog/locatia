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
  private selectArray: SelectOption[] = [
    { alias: 'type d\'exploitation', label: 'action', options: ['louer', 'acheter', 'passager'] },
    { alias: 'type de demeure', label: 'type', options: ['appartement', 'duplexe', 'maison', 'ryad', 'villa', 'auberge'] },
    { alias: 'ville / region', label: 'city', options: ['casablanca', 'marrakech', 'agadir', 'rabat', 'chefchaouen', 'kenitra'] }
  ];
  constructor() { }

  getSelectOptions() {
    return this.selectArray.slice();
  }
}
