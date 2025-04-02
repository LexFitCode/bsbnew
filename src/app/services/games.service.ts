import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  GamesService {
  private _url = 'https://lexfitcode.github.io/dummieweb/lm/games.json'
  constructor( private http:HttpClient ) { }
  getGames(): Observable<any> {
    return this.http.get<any>(this._url)
  }

}
