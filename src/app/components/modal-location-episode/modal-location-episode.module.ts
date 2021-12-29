import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalLocationEpisodeRoutingModule } from './modal-location-episode-routing.module';
import { ModalLocationEpisodeComponent } from './modal-location-episode.component';
import { LocationService } from '@app/services/location.service';
import { EpisodeService } from '@app/services/episode.service';


@NgModule({
  declarations: [
    ModalLocationEpisodeComponent
  ],
  imports: [
    CommonModule,
    ModalLocationEpisodeRoutingModule
  ],
  providers:[LocationService, EpisodeService],
  exports:[ModalLocationEpisodeComponent]
})
export class ModalLocationEpisodeModule { }
