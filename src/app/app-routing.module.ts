import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }, 
  { path: 'country-list', loadChildren: () => import('./components/countries/countries-list/countries-list.module').then(m => m.CountriesListModule) }, 
  { path: 'country-details/:id', loadChildren: () => import('./components/countries/countries-details/countries-details.module').then(m => m.CountriesDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
