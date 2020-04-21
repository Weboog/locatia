import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  count: any;
  registered: [];
  constructor() { }

  ngOnInit(): void {
    this.registered = JSON.parse(localStorage.getItem('registeredAparts')).registered as [];
    this.count = this.registered.length;
  }

  delete(id: string) {

  }

}
