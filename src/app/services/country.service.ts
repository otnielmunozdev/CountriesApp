import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '@app/classes/country.class';
import { environment } from 'src/environments/environment';

const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  constructor(private httpClient: HttpClient) {
  }

  getInfoCountry() {
    return this.httpClient.get<Country>(apiURL + `all`);
  }

  getSearchCountry(name: string) {
    return this.httpClient.get<Country>(apiURL + `/name/${name}`);
  }

  getDetailCountry(code: string) {
    return this.httpClient.get<Country[]>(apiURL + `/alpha/${code}`);
  }

}
