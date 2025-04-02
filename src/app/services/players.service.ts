import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private _url = 'https://lexfitcode.github.io/dummieweb/lm/icons.json'

  constructor( private http:HttpClient ) { }
  getPlayers(): Observable<any> {
    return this.http.get<any>(this._url)
  }

}
