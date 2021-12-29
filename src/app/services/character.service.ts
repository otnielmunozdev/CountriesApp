import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@app/classes/character.class';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor( private httpClient: HttpClient) {
   }

   getInfoCharacter(name: any = '',page:number = 1) {
     let urlAux = '';
     if( typeof name == 'string'){
      urlAux = `?name=${name}&page=${page}`
     } else {
       urlAux = name;
     }
    return this.httpClient.get<Character>(environment.apiUrl + `character/${urlAux}`);  
  }

  getDetailCharacter(id:number) {

   return this.httpClient.get<Character>(environment.apiUrl+ `/character/${id}`);  
 }
  
}
