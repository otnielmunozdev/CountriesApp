import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Character } from '@app/classes/character.class';
import { CharacterService } from '@app/services/character.service';
import { take } from 'rxjs';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  private numberPage: any = null;
  private query: string = '';
  info = {
    next: ''
  }

  private contadorScroll: number = 0;
  subscription: any;
  showNoresult:boolean = false;
  showLoading:boolean = false;
  
  constructor(private characterService: CharacterService,
    private router: Router,
    private activeRoute: ActivatedRoute,) {
    this.urlChange();
  }

  charactersArray: Character[] = [];
  ngOnInit(): void {
    setTimeout(() => {
      let x: any = document.querySelector('#containerBody');
      x.addEventListener('scroll', (event: any) => this.checkScrollViews(event));
    }, 2000);

  }

  checkScrollViews(event: any) {
    let maxScroll: number = (event.target as HTMLInputElement).scrollHeight - (event.target as HTMLInputElement).clientHeight;
    let currentScroll: number = event.target.scrollTop;
    let cincoPorciento = (5 * maxScroll) / 100;
    maxScroll = maxScroll - cincoPorciento;

    if (currentScroll >= maxScroll) {
      if (this.contadorScroll == 0) {
        event.stopPropagation();
        this.activeRoute.queryParams.pipe(take(1)).subscribe((params: any) => {
          if(!params['locationOrEpisodes']){
              this.onScrollDown();
          } 
         })
      }
      this.contadorScroll++;
    } else {
      this.contadorScroll = 0;
    }
  }

  loadCharacters() {
    this.showLoading = true;
    this.showNoresult = false;
    this.characterService.getInfoCharacter(this.query, this.numberPage).pipe(take(1)).subscribe((response: any) => {
      
      if (response.length) {
        this.charactersArray = response;
        this.showNoresult = false;
        this.showLoading = false;
        
      } else if(response.results){
        let { info, results } = response;
        this.showNoresult = false;
        this.showLoading = false;
        this.charactersArray = [...this.charactersArray, ...results]
        this.info = info;
      } else if(typeof response == 'object'){
        this.showNoresult = false;
        this.showLoading = false;
          this.charactersArray.push(response);
      }
       else {
         this.showNoresult = true;
         this.showLoading = false;
        this.charactersArray = [];
      }
    }, ((error) => {
      this.showNoresult = true;
      this.showLoading = false;
      console.error("error al cargar personajes", error);

    }));
  }

  searchCharacter() {
    this.activeRoute.queryParams.pipe(take(1)).subscribe((params: any) => {
     if(params['search']){
      this.query = params['search'];
     } else if (params['locationOrEpisodes']){
      this.query = params['locationOrEpisodes'];
     }
      this.loadCharacters();
    })
  }

  urlChange() {
    this.subscription = this.router.events.subscribe((value) => {
      this.charactersArray = [];
      if (value instanceof NavigationEnd) {
        this.searchCharacter();
      }
    });

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onScrollDown() {
    if (this.info.next) {
      this.numberPage++;
      this.loadCharacters();
    }
  }


}
