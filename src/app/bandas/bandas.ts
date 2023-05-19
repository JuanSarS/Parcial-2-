
export class Bandas {


  id: number;
  name: string;
  foundation_year: number;
  country: string ;
  genre: string ;

  constructor(id: number,
    name: string,
    foundation_year: number,
    country: string ,
    genre: string ){
      this.id=id;
      this.name=name;
      this.foundation_year=foundation_year;
      this.country=country;
      this.genre=genre;
    }
}
