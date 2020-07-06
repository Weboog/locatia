import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

  showLocalFilters = false;
  showSorting = false;
  constructor() { }

  ngOnInit(): void {
  }

  onLocalFilters() {
    this.showLocalFilters = !this.showLocalFilters;
  }

  onSorting() {
    this.showSorting = !this.showSorting;
  }
}
