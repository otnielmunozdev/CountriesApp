import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersListRoutingModule } from './characters-list-routing.module';
import { CharacterService } from '@app/services/character.service';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    CharactersListRoutingModule,
  ],
  providers: [CharacterService]
})
export class CharactersListModule { }
