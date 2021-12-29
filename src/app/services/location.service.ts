import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  getInfoLocation(name: string = '',page:number = 1) {
    return this.httpClient.get<Location>(environment.apiUrl + `/location/?name=${name}&page=${page}`);  
  }

}
