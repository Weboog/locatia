import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApartsService} from '../aparts/aparts.service';
import {Apart} from '../shared/custom-types/apart';
import {FavouriteService} from './favourite.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit, OnDestroy {

  count: any;
  registeredIndexes: [];
  aparts: Apart[];
  favCountSubscription: Subscription;
  constructor( private apartsService: ApartsService, private favouriteService: FavouriteService) { }

  ngOnInit(): void {
    this.registeredIndexes = this.favouriteService.getRegistered().registered as [];
    this.count = this.registeredIndexes.length;
    this.favCountSubscription = this.favouriteService.favChange.subscribe( count => {
      this.count = count;
    });
    this.aparts = this.apartsService.getRegisteredAparts(this.registeredIndexes);
  }

  ngOnDestroy(): void {
    this.favCountSubscription.unsubscribe();
  }

  delete(id: string, elementId: number) {
    this.favouriteService.registerApart(id);
    document.querySelector('#favourite-' + elementId).remove();
    return false;
  }

}
