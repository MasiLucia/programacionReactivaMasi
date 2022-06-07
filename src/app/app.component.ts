import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from './rick-and-morty.service';
import { fromEvent, Observable, Subject, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'programacionReactivaMasi';

  characterSubs:Subscription;
  character:any;
  mortyObs :Observable<any>
  ejemplo = this.rickAndMortyService.getData("https://rickandmortyapi.com/api/character");


  constructor(private rickAndMortyService: RickAndMortyService,   private http: HttpClient
    ){

      this.llamadoPersonajes();
      this.ejemplo =  this.rickAndMortyService.getRickAndMortyCharacters();

}


  ngOnInit(): void {

    console.log(this.ejemplo);
    this.rickAndMortyService.getData("https://rickandmortyapi.com/api/character").subscribe((data: Observable<any>) => {
      console.log(data);

    });

      this.siExisten();
      this.rickAndMortyService.getRickAndMortyCharacters();
}



llamadoPersonajes(){

  this.mortyObs = this.rickAndMortyService.getCharacter(2);

  this.characterSubs = this.rickAndMortyService.getCharacter(1)
  .pipe(
    map((x:any)=> {
      return {name: x.name, image: x.image}
    })
  )
  .subscribe(
    (character) => {
      this.character = character;
    }
  )

  let subject = new Subject();
  let click$ = fromEvent(document, 'click');
  subject.subscribe(
    (val:any)=> console.log('Primer' + val.type)
    )
    subject.subscribe(
      (val:any)=>console.log('Segundo' + val.type)
    )
      click$.subscribe(subject);


  }


// promesa

existePersonaje() {
  return new Promise((resolve, reject)=> {
    if(this.ejemplo) {
      return resolve(this.ejemplo.forEach((x: any)=>{
        console.log(x);
      }) );
      } else {

      return reject({message : 'no se encontraros.ejemplo'}) }
    });
  }


siExisten(){
  this.existePersonaje().then((x: any)=>{
    console.log(x);

  }).catch((error)=> console.log(error))






// ngOnDestroy(): void {
//     this.character$.unsubscribe();
//        }


}

}
