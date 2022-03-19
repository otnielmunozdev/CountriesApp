import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Country } from '@app/classes/country.class';
import { CountryService } from '@app/services/country.service';
import { take } from 'rxjs';


@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  private query: string = '';
  info = {
    next: ''
  }

  subscription: any;
  showNoresult: boolean = false;
  showLoading: boolean = false;

  constructor(private countryService: CountryService,
    private router: Router,
    private activeRoute: ActivatedRoute,) {
    this.urlChange();
  }

  countriesArray: Country[] = [];
  ngOnInit(): void {
  }


  loadCountries(name?: string) {
    this.showLoading = true;
    this.showNoresult = false;
    if (name) {
      this.countryService.getSearchCountry(name).pipe(take(1)).subscribe((response: any) => {
        if (response.length) {
          this.countriesArray = response;
          this.showNoresult = false;
          this.showLoading = false;

        } else if (response.results) {
          let { info, results } = response;
          this.showNoresult = false;
          this.showLoading = false;
          this.countriesArray = [...this.countriesArray, ...results]
          this.info = info;
        } else if (typeof response == 'object') {
          this.showNoresult = false;
          this.showLoading = false;
          this.countriesArray.push(response);
        }
        else {
          this.showNoresult = true;
          this.showLoading = false;
          this.countriesArray = [];
        }
      }, ((error) => {
        this.showNoresult = true;
        this.showLoading = false;
        console.error("error al cargar paises", error);

      }));

    } else {
      this.countryService.getInfoCountry().pipe(take(1)).subscribe((response: any) => {
        if (response.length) {
          this.countriesArray = response;
          this.showNoresult = false;
          this.showLoading = false;

        } else if (response.results) {
          let { info, results } = response;
          this.showNoresult = false;
          this.showLoading = false;
          this.countriesArray = [...this.countriesArray, ...results]
          this.info = info;
        } else if (typeof response == 'object') {
          this.showNoresult = false;
          this.showLoading = false;
          this.countriesArray.push(response);
        }
        else {
          this.showNoresult = true;
          this.showLoading = false;
          this.countriesArray = [];
        }
      }, ((error) => {
        this.showNoresult = true;
        this.showLoading = false;
        console.error("error al cargar paises", error);

      }));
    }

  }

  searchCountry() {
    this.activeRoute.queryParams.pipe(take(1)).subscribe((params: any) => {
      this.query = params['search'];
      this.loadCountries(this.query);
    });
  }

  urlChange() {
    this.subscription = this.router.events.subscribe((value) => {
      this.countriesArray = [];
      if (value instanceof NavigationEnd) {
        this.searchCountry();
      }
    });

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
