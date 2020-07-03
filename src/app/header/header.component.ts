import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FavouriteService} from '../favourite/favourite.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() showMenu = new EventEmitter<null>();
  @Output() showFilters = new EventEmitter<null>();
  favCount: number;
  constructor( private favouriteService: FavouriteService) { }

  ngOnInit() {
    this.favCount = this.favouriteService.getLength();
    this.favouriteService.favChange.subscribe( count => {
      this.favCount = count;
    });
  }

  onShowMenu() {
    this.showMenu.emit();
  }

  onShowFilters() {
    this.showFilters.emit();
  }

}
