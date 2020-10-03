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

  @Output() onClose = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    // this.favSubscription.unsubscribe();
  }

  close() {
    this.onClose.emit();
    // this.favSubscription.unsubscribe();
  }
}
