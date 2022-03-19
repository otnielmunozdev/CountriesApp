import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';


@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit, AfterViewInit {

  constructor(
              private router:Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      let input:any = document.querySelector('#searchInput');  
      this.activeRoute.queryParams.pipe(take(1)).subscribe((params:any)=>{        
        if(params['search']){
          input.value = params['search'];
        }
      });
    }, 1000);
  }

  searchCountry(name:any){
    let value = name.value;
      this.router.navigate(['/country-list'],{
        queryParams:{search:value}
      });
  }
}
