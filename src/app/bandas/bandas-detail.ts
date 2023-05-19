import { Bandas } from "./bandas";

export class BandasDetail extends Bandas{


  description: string;
  imagen: string ;

constructor(id: number,
  name: string,
  foundation_year: number,
  country: string ,
  genre: string ,
  description: string,imagen:string){
  super(id,name,foundation_year,country,genre);
    this.description=description;
    this.imagen=imagen;
}

}
