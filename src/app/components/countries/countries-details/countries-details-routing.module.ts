import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesDetailsComponent } from './countries-details.component';

const routes: Routes = [{ path: '', component: CountriesDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesDetailsRoutingModule { }
