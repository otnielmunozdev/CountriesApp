import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country, Currency } from '@app/classes/country.class';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {

  @Input() country: Country;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goDetails(id: string) {
    this.router.navigate(['/country-details', id]);
  }

  displayCurrencies(currencies: Currency[]) {
    return currencies.map((currency) => currency.name).join(', ');
  }
}
