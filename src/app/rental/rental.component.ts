import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

  showLocalfilters = false;
  constructor() { }

  ngOnInit(): void {
  }

  onLocalfilters() {
    this.showLocalfilters = !this.showLocalfilters;
  }

}
