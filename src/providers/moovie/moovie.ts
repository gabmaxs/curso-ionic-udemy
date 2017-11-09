import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseApiPath:string = "https://api.themoviedb.org/3";
  private getApiKey():string{
    return "fd7350d93d1710c9e67293256bdd4e06";
  }

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.getApiKey());
  }

  getMovieDetails(filmeId){
    return this.http.get(this.baseApiPath + `/movie/${filmeId}?api_key=` + this.getApiKey());
  }
}
