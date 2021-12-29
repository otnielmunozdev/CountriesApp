import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersDetailsRoutingModule } from './characters-details-routing.module';
import { CharacterService } from '@app/services/character.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CharactersDetailsRoutingModule
  ],
  providers: [CharacterService]
})
export class CharactersDetailsModule { }
