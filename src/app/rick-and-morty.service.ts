import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterApi, CharacterResult } from './character.interface';
import { map, Observable } from 'rxjs';

const URL_BASE = 'https://rickandmortyapi.com/api/character/'

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }


  getCharacter(n: number){
    return this.http.get(`${URL_BASE}${n}`);
  }


  get(){
    return this.http.get(URL_BASE);
  }

    getData(url: string): Observable<any>{
      return this.http.get(url);
  }

  getRickAndMortyCharacters(): Observable<CharacterResult[]> {
      return this.http.get<CharacterApi>("https://rickandmortyapi.com/api/character")
      .pipe(map((apiResult: any) =>
          apiResult.result
      ));
  }
}


