import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from '@app/classes/episode.class';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) { }

  getInfoEpisode(name: string = '',page:number = 1) {
    return this.httpClient.get<Episode>(environment.apiUrl + `episode/?name=${name}&page=${page}`);  
  }

}
