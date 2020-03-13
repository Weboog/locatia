import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './filters/filters.component';
import { CustomSelectComponent } from './shared/custom-select/custom-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VacancesComponent } from './vacances/vacances.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { RentalComponent } from './rental/rental.component';
import { RentalClassicComponent } from './rental/rental-classic/rental-classic.component';
import { RentalVacancyComponent } from './rental/rental-vacancy/rental-vacancy.component';
import { RentalTemporalComponent } from './rental/rental-temporal/rental-temporal.component';
import { RentalCommerceComponent } from './rental/rental-commerce/rental-commerce.component';
import { BuyComponent } from './buy/buy.component';
import { BuyApartmentComponent } from './buy/buy-apartment/buy-apartment.component';
import { BuyHouseComponent } from './buy/buy-house/buy-house.component';
import { BuyLandComponent } from './buy/buy-land/buy-land.component';
import { BuyCommerceComponent } from './buy/buy-commerce/buy-commerce.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { PlaceholderDirective } from './placeholder.directive';
import { DummyComponent } from './dummy/dummy.component';
import { ApartListComponent } from './apart-list/apart-list.component';
import { ApartComponent } from './apart-list/apart/apart.component';
import { ApartDetailComponent } from './apart-list/apart-detail/apart-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    FiltersComponent,
    CustomSelectComponent,
    VacancesComponent,
    DestinationsComponent,
    RentalComponent,
    RentalClassicComponent,
    RentalVacancyComponent,
    RentalTemporalComponent,
    RentalCommerceComponent,
    BuyComponent,
    BuyApartmentComponent,
    BuyHouseComponent,
    BuyLandComponent,
    BuyCommerceComponent,
    FavouriteComponent,
    PlaceholderDirective,
    DummyComponent,
    ApartListComponent,
    ApartComponent,
    ApartDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
