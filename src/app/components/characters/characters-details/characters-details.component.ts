import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '@app/services/character.service';
import { Location } from '@angular/common';
import { Observable, take } from 'rxjs';
import { Character } from '@app/classes/character.class';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css']
})
export class CharactersDetailsComponent implements OnInit {

  character:Observable <Character>;

  constructor(private characterService: CharacterService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private location: Location,
   ) {
  }

  ngOnInit(): void {
    this.activeRoute.params.pipe(take(1)).subscribe((data) => {
      let id = data['id'];
      this.character = this.characterService.getDetailCharacter(id);
    });
  }

  back() {
    this.location.back();
  }

}
