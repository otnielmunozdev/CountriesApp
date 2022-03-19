import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesDetailsRoutingModule } from './countries-details-routing.module';
import { CountryService } from '@app/services/country.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CountriesDetailsRoutingModule
  ],
  providers: [CountryService]
})
export class CountriesDetailsModule { }
