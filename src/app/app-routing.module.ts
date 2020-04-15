import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RentalComponent} from './rental/rental.component';
import {RentalClassicComponent} from './rental/rental-classic/rental-classic.component';
import {RentalVacancyComponent} from './rental/rental-vacancy/rental-vacancy.component';
import {RentalTemporalComponent} from './rental/rental-temporal/rental-temporal.component';
import {RentalCommerceComponent} from './rental/rental-commerce/rental-commerce.component';
import {BuyComponent} from './buy/buy.component';
import {BuyApartmentComponent} from './buy/buy-apartment/buy-apartment.component';
import {BuyHouseComponent} from './buy/buy-house/buy-house.component';
import {BuyLandComponent} from './buy/buy-land/buy-land.component';
import {BuyCommerceComponent} from './buy/buy-commerce/buy-commerce.component';
import {FavouriteComponent} from './favourite/favourite.component';
import {ApartListComponent} from './aparts/apart-list/apart-list.component';
import {ApartDetailComponent} from './aparts/apart-detail/apart-detail.component';
import {RecommendationsComponent} from './recommendations/recommendations.component';
import {RentalStartComponent} from './rental/rental-start/rental-start.component';
import {BuyStartComponent} from './buy/buy-start/buy-start.component';
import {ApartsComponent} from './aparts/aparts.component';


const routes: Routes = [
  {path: 'aparts', component: ApartsComponent, children: [
      {path: '', component: ApartListComponent, pathMatch: 'full'},
      {path: ':id', component: ApartDetailComponent}
    ]},
  {path: 'favourite', component: FavouriteComponent},
  {path: 'rental', component: RentalComponent, children: [
      {path: '', component: RentalStartComponent},
      {path: 'classic', component: RentalClassicComponent},
      {path: 'vacancy', component: RentalVacancyComponent},
      {path: 'temporal', component: RentalTemporalComponent},
      {path: 'commerce', component: RentalCommerceComponent},
    ]},
  {path: 'buy', component: BuyComponent, children: [
      {path: '', component: BuyStartComponent},
      {path: 'apart', component: BuyApartmentComponent},
      {path: 'house', component: BuyHouseComponent},
      {path: 'land', component: BuyLandComponent},
      {path: 'commerce', component: BuyCommerceComponent}
    ]},
  {path: 'recommendations', component: RecommendationsComponent},
  {path: '**', redirectTo: 'aparts'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
