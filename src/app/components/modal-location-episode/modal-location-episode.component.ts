import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@app/classes/location.class';
import { LocationService } from '@app/services/location.service';
import { take } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeService } from '@app/services/episode.service';
import { Episode } from '@app/classes/episode.class';
import { AppState } from '@app/classes/appState.class';
import { Store } from '@ngrx/store';
import { ClickFilterCardEpisodeAction, ClickFilterCardLocationAction } from '../counter.actions';



@Component({
  selector: 'app-modal-location-episode',
  templateUrl: './modal-location-episode.component.html',
  styleUrls: ['./modal-location-episode.component.css']
})
export class ModalLocationEpisodeComponent implements OnInit {

  private numberPageLocation: any = null;
  private numberPageEpisode: any = null;
  private queryLocation: string = '';
  private queryEpisode: string = '';
  infoLocation = {
    next: ''
  };

  infoEpisode = {
    next: ''
  };

  private contadorScrollLocation: number = 0;
  subscriptionLocation: any;
  private contadorScrollEpisode: number = 0;
  subscriptionEpisode: any;

  locationsArray: Location[] = [];
  episodesArray: Episode[] = [];
  currentTab: string = "location";

  typeFilter = {
    location: 'location',
    episode: 'episode'
  }

  constructor(private locationService: LocationService,
    private episodeService: EpisodeService,
    private router: Router,
    private bsModal: NgbModal,
    private store: Store<AppState>) { }


  ngOnInit(): void {
    this.loadLocations();
    this.loadEpisodes();
    this.eventScroll(this.typeFilter.location);
  }

  eventScroll(type?: string) {
   try {
    if (type == this.typeFilter.location) {
      setTimeout(() => {
        let x: any = document.querySelector('#containerCardInfo');
        x.addEventListener('scroll', (event: any) => this.checkScrollViews(event, this.typeFilter.location));
      }, 2000);
    } else if (type == this.typeFilter.episode) {
      setTimeout(() => {
        let x: any = document.querySelector('#containerCardEpisodeInfo');
        x.addEventListener('scroll', (event: any) => this.checkScrollViews(event, this.typeFilter.episode));
      }, 2000);
    }
   } catch (error) {
     
   }
  }

  checkScrollViews(event: any, type: string) {
    if (type == this.typeFilter.location) {
      let maxScroll: number = (event.target as HTMLInputElement).scrollHeight - (event.target as HTMLInputElement).clientHeight;
      let currentScroll: number = event.target.scrollTop;
      let cincoPorciento = (6 * maxScroll) / 100;
      maxScroll = maxScroll - cincoPorciento;

      if (currentScroll >= maxScroll) {
        if (this.contadorScrollLocation == 0) {
          event.stopPropagation();
          this.onScrollDown(this.typeFilter.location);
        }
        this.contadorScrollLocation++;
      } else {
        this.contadorScrollLocation = 0;
      }
    } else if (type == this.typeFilter.episode) {
      let maxScroll: number = (event.target as HTMLInputElement).scrollHeight - (event.target as HTMLInputElement).clientHeight;
      let currentScroll: number = event.target.scrollTop;
      let cincoPorciento = (6 * maxScroll) / 100;
      maxScroll = maxScroll - cincoPorciento;

      if (currentScroll >= maxScroll) {
        if (this.contadorScrollLocation == 0) {
          event.stopPropagation();
          this.onScrollDown(this.typeFilter.episode);
        }
        this.contadorScrollLocation++;
      } else {
        this.contadorScrollLocation = 0;
      }
    }
  }

  loadLocations() {
    this.locationService.getInfoLocation(this.queryLocation, this.numberPageLocation).pipe(take(1)).subscribe((response: any) => {
      if (response.results.length) {
        let { info, results } = response;
        this.locationsArray = [...this.locationsArray, ...results]
        this.infoLocation = info;
      } else {
        this.locationsArray = [];
      }
    }, ((error) => {
      console.error("error al cargar las locaciones", error);
    }));
  }

  loadEpisodes() {
    this.episodeService.getInfoEpisode(this.queryEpisode, this.numberPageEpisode).pipe(take(1)).subscribe((response: any) => {
      if (response.results.length) {
        let { info, results } = response;
        this.episodesArray = [...this.episodesArray, ...results]
        this.infoEpisode = info;
      } else {
        this.episodesArray = [];
      }
    }, ((error) => {
      console.error("error al cargar las episodios", error);

    }));
  }

  search(event: any, type: string) {
    if (type == this.typeFilter.location) {
      let value = event.value;
      this.locationsArray = [];
      this.numberPageEpisode = 1;
      this.queryLocation = value;
      this.loadLocations();
    } else if (type == this.typeFilter.episode) {
      let value = event.value;

      this.episodesArray = [];
      this.numberPageEpisode = 1;
      this.queryEpisode = value;
      this.loadEpisodes();
    }

  }

  onScrollDown(type: string) {
    if (type == this.typeFilter.location) {
      if (this.infoLocation.next) {
        this.numberPageLocation++;
        this.loadLocations();
      }
    } else if (type == this.typeFilter.episode) {
      if (this.infoEpisode.next) {
        this.numberPageEpisode++;
        this.loadEpisodes();
      }
    }
  }

  goFilter(object: any, type: string) {
    const actionLocation = new ClickFilterCardLocationAction();
    const actionEpisode = new ClickFilterCardEpisodeAction();

    if (type == this.typeFilter.location) {
      let arrayIdCharacter: number[] = [];
      let expReg = /(\d+)/g;
      object.residents.forEach((url: any) => {
        let idFilter = url.match(expReg);
        let id = idFilter[0]
        arrayIdCharacter.push(parseInt(id));
      });
      let input: any = document.querySelector('#searchInput');
      input.value = '';

      this.store.dispatch(actionLocation);

      this.router.navigate(['/character-list'], {
        queryParams: { locationOrEpisodes: arrayIdCharacter }
      });

    } else if (type == this.typeFilter.episode) {
      let arrayIdCharacter: number[] = [];
      let expReg = /(\d+)/g;
      object.characters.forEach((url: any) => {
        let idFilter = url.match(expReg);
        let id = idFilter[0]
        arrayIdCharacter.push(parseInt(id));
      });
      let input: any = document.querySelector('#searchInput');
      input.value = '';

      this.store.dispatch(actionEpisode);

      this.router.navigate(['/character-list'], {
        queryParams: { locationOrEpisodes: arrayIdCharacter }
      });
    }
    this.closeModal();

  }

  closeModal() {
    this.bsModal.dismissAll();

  }



}
