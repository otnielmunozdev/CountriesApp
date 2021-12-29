import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }, 
  { path: 'character-list', loadChildren: () => import('./components/characters/characters-list/characters-list.module').then(m => m.CharactersListModule) }, 
  { path: 'character-details/:id', loadChildren: () => import('./components/characters/characters-details/characters-details.module').then(m => m.CharactersDetailsModule) },
  { path: 'modalLocationEpisode', loadChildren: () => import('./components/modal-location-episode/modal-location-episode.module').then(m => m.ModalLocationEpisodeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
