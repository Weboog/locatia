import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FiltersService} from '../../filters/filters.service';

@Component({
  selector: 'app-local-options',
  templateUrl: './local-options.component.html',
  styleUrls: ['./local-options.component.scss']
})
export class LocalOptionsComponent implements OnInit {

  @Output() onFilters = new EventEmitter<boolean>();
  @Output() onSorting = new EventEmitter<boolean>();
  constructor( private filtersService: FiltersService) { }

  ngOnInit(): void {
  }

  onClickFilters() {
    this.filtersService.showFilter.next(true);
  }

  onClickSorting() {
    this.onSorting.emit(true);
  }

}
