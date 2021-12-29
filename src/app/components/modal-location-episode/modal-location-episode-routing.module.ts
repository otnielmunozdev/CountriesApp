import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalLocationEpisodeComponent } from './modal-location-episode.component';

const routes: Routes = [{ path: '', component: ModalLocationEpisodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalLocationEpisodeRoutingModule { }
