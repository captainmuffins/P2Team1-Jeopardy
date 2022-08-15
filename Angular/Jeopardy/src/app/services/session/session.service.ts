import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _sessions = 'https://revaturejeopardyproject.space:8443/api/session/';
  private _sessionsUpdate = 'https://revaturejeopardyproject.space:8443/api/session/id/';
  private _games = 'https://revaturejeopardyproject.space:8443/api/games/';
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

  updateSession(session: any, id: any) {
    return this.http.put<any>(this._sessionsUpdate + id, session, {
      withCredentials: true,
    });
  }
}
