import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoreboardService {
  private _sessions = 'https://revaturejeopardyproject.space:8443/api/session/';
  private _playerSessions = 'https://revaturejeopardyproject.space:8443/api/session/byPlayer/';
  constructor(private http: HttpClient) {}

  getAllSessions() {
    return this.http.get<any>(this._sessions, {
      withCredentials: true,
    });
  }
  getPlayerSessions(playerId: any) {
    return this.http.get<any>(this._playerSessions + playerId, {
      withCredentials: true,
    });
  }
}
