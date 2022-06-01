
export class Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: any;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: Array<string>;
  firstEpisode: string;
  url: Date;
  created: Date;
  constructor(name:string){
    this.name=name;
  }

    obtenerPersonaje() {
    return new Promise(
      (resolve,reject) => {
        if (this.name){
          return resolve ([{RickAndMortyService:this.name}])
        }
        return reject ({message:'error: character not found'})
      }
    )
  }

} 

export interface Origin {
  name: string;
  url: Date;
}

export interface Location {
  name: string;
  url: string;
}
