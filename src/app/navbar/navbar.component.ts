import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FavouriteService} from '../favourite/favourite.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  favSubscription: Subscription;
  favCount: number;

  @Output() onClose = new EventEmitter<any>();
  constructor( private favouriteService: FavouriteService) { }

  ngOnInit() {
    this.favouriteService.favChange.subscribe( count => {
      this.favCount = count;
    });
  }

  ngOnDestroy(): void {
    this.favSubscription.unsubscribe();
  }

  close() {
    this.onClose.emit();
  }
}
