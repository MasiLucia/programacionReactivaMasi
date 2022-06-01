import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character';

const URL_BASE = 'https://rickandmortyapi.com/api/character/'

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  character : Character;

  getCharacter(n: number){
    return this.http.get(`${URL_BASE}${n}`);
  }

  get(){
    return this.http.get(URL_BASE);
  }

  // obtenerPersonaje() {
  //     return new Promise(
  //       (resolve,reject) => {
  //         if (this.character.name){
  //           return resolve ([{RickAndMortyService:this.character.name}])
  //         }
  //         return reject ({message:'error: character not found'})
  //       }


    //   )}
    
     }
