import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private _mysession = 'http://localhost:8080/api/players/mysession';
  constructor(private http: HttpClient) {}
  getCurrentSession() {
    return this.http.get<any>(this._mysession, {
      withCredentials: true,
    });
  }
}
