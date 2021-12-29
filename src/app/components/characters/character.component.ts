import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '@app/classes/character.class';
import { Store} from '@ngrx/store';
import { AppState } from '@app/classes/appState.class';
import { ClickCardAction } from '../counter.actions';


@Component({
  selector: 'app-card-character',
  template: ` 
    <img class="card-img-top imgProfile" [src]="character.image" [alt]="character.name" >
    <div class="card-body">
      <h5 class="card-title">{{character.name}}</h5>
     <div style="display: flex;">
        <div class="statusCircle" [ngClass]="{'redStatus': character.status != 'Alive'}"></div>
        <p class="card-text specie">  Status: {{character.status}}</p>
     </div>
     <p class="card-text">Specie: {{character.species}}</p>

      <a class="btn btn-primary" (click)="goDetails(character.id);">More info...</a>
    </div>`,
  styleUrls: ['/characters-list/characters-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CardCharacterComponent implements OnInit{
  @Input() character: Character;

  constructor(private router: Router,
    private store: Store<AppState>) { }

  ngOnInit(): void {
  }


  goDetails(id: number) {
    const action = new ClickCardAction();
    this.store.dispatch(action);
    this.router.navigate(['/character-details', id]);
  }


}