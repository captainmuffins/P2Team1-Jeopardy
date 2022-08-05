import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:8080/api/players/new"
  constructor(private http: HttpClient) {

  }
  registerPlayer(player : any) {
    return this.http.post<any>(this._registerUrl, player)
  }
}
