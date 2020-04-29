import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-local-options',
  templateUrl: './local-options.component.html',
  styleUrls: ['./local-options.component.scss']
})
export class LocalOptionsComponent implements OnInit {

  @Output() onFilters = new EventEmitter<boolean>();
  @Output() onSorting = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  onClickFilters() {
    this.onFilters.emit(true);
  }

  onClickSorting() {
    this.onSorting.emit(true);
  }

}
