import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { InputSearchComponent } from './shared/components/input-search/input-search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { ModalLocationEpisodeComponent } from './components/modal-location-episode/modal-location-episode.component';
import { ModalLocationEpisodeModule } from './components/modal-location-episode/modal-location-episode.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { countReducerCard, countReducerFilter, countReducerFilterClickEpisode, countReducerFilterClickLocation } from './components/counter.reducer';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ModalLocationEpisodeModule,
    NgbModule,
    StoreModule.forRoot({countClickCard: countReducerCard, 
      countClickFilter: countReducerFilter, 
      countClickFilterCardLocation:countReducerFilterClickLocation,
      countClickFilterCardEpisode:countReducerFilterClickEpisode,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
