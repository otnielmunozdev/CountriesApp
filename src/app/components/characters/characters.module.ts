import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CardCharacterComponent } from './character.component';




@NgModule({
  declarations: [
    CharactersDetailsComponent,
    CharactersListComponent,
    CardCharacterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CharactersDetailsComponent,
    CharactersListComponent,
    CardCharacterComponent
  ],
})
export class CharactersModule { }
