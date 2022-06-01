import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from './rick-and-morty.service';
import { fromEvent, Observable, Subject, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from './character';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'programacionReactivaMasi';
  character$:Subscription
  character:any;
  characterO$:Observable<any>

  // promesa
  ch = new Character('Morty');



  constructor(private rickAndMortyService: RickAndMortyService){
    this.characterO$ = this.rickAndMortyService.getCharacter(2);
    this.character$ = this.rickAndMortyService.getCharacter(1)
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



  ngOnInit(): void {

   this.ch.obtenerPersonaje()
 .then((val:any)=>console.log(val))
   .catch((error:any)=>console.log(error.message))
  }

}





// ngOnDestroy(): void {
//     this.character$.unsubscribe();
//        }








