import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  showFilters = new Subject<boolean>();
  showSorting = new Subject<boolean>();
}
