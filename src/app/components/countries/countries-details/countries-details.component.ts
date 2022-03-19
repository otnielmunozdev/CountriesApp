import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '@app/services/country.service';
import { Location } from '@angular/common';
import { Observable, take } from 'rxjs';
import { Country, Currency } from '@app/classes/country.class';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrls: ['./countries-details.component.css']
})
export class CountriesDetailsComponent implements OnInit {

  country: Country;
  showLoading: boolean = true;

  constructor(private countryService: CountryService,
    private activeRoute: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    this.showLoading = true;
    this.activeRoute.params.pipe(take(1)).subscribe((data) => {
      let id = data['id'];
      this.countryService.getDetailCountry(id).subscribe((resp) => {
        this.country = resp[0];

      });
    }, (error) => {
      console.error("Error al obtener informacion del pais", error);
    }, () => {
      this.showLoading = false;
    });
  }

  displayLanguages(languagues: any) {
    return Object.values(languagues);
  }

  displayCurrencies(currencies: any) {
    let tmpCurren: any = Object.values(currencies);
    tmpCurren = tmpCurren[0]
    return Object.values(tmpCurren);
  }

  back() {
    this.location.back();
  }

  goMap(url: string) {
    window.open(url, '_blank');
  }
}
