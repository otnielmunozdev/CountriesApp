import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesDetailsComponent } from './countries-details/countries-details.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryCardComponent } from './country-card/country-card.component';

@NgModule({
  declarations: [
    CountriesDetailsComponent,
    CountriesListComponent,
    CountryCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CountriesDetailsComponent,
    CountriesListComponent,
  ],
})
export class CountriesModule { }
