import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesListRoutingModule } from './countries-list-routing.module';
import { CountryService } from '@app/services/country.service';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    CountriesListRoutingModule,
  ],
  providers: [CountryService]
})
export class CountriesListModule { }
