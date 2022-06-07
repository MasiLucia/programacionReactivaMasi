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
  personajes :any;


  constructor(private rickAndMortyService: RickAndMortyService,   private http: HttpClient
    ){

      this.llamadoPersonajes();
      this.personajes =  this.rickAndMortyService.getCharacter(2)

      console.log("son los pjs" + this.personajes)



    // this.character$ = this.rickAndMortyService.getRickAndMortyCharacters();
    // this.character$.pipe(map((character:any)=> {
    //   this.characters.push(character)
    // })).subscribe(()=>{})



}


  ngOnInit(): void {

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
    if(this.personajes) {
      return resolve(this.personajes) ;
      } else {

      return reject({message : 'no se encontraron personajes'}) }
    })

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
