import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _sessions = 'http://localhost:8080/api/session/';
  private _games = 'http://localhost:8080/api/games/';
  constructor(private http: HttpClient) {}
  addSession(session: any) {
    return this.http.post<any>(this._sessions, session, {
      withCredentials: true,
    });
  }

  addGame() {
    return this.http.post<any>(this._games, {
      withCredentials: true,
    });
  }

  updateSession(session: any) {
    return this.http.put<any>(this._sessions, session, {
      withCredentials: true,
    });
  }
}
