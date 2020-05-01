import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  showFilter = new Subject<boolean>();

  constructor() { }
}
