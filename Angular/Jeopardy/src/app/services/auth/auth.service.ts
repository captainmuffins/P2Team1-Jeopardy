import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'http://localhost:8443/api/players/new';
  private _loginUrl = 'http://localhost:8443/api/players/login';
  constructor(private http: HttpClient) {}
  registerPlayer(player: any) {
    return this.http.post<any>(this._registerUrl, player);
  }
  loginPlayer(player: any) {
    return this.http.post<any>(this._loginUrl, player, {
      withCredentials: true,
    });
  }
}
