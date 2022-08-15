import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private _mysession = 'https://revaturejeopardyproject.space:8443/api/players/mysession';
  private _updateProfile = 'https://revaturejeopardyproject.space:8443/api/players/profile';
  private _changePassword = 'https://revaturejeopardyproject.space:8443/api/players/password';
  private _uploadAvatar = 'https://revaturejeopardyproject.space:8443/api/players/avatar';

  constructor(private http: HttpClient) {}
  getCurrentSession() {
    return this.http.get<any>(this._mysession, {
      withCredentials: true,
    });
  }
  updatePlayer(player: any) {
    return this.http.put<any>(this._updateProfile, player, {
      withCredentials: true,
    });
  }
  changePassword(player: any) {
    return this.http.put<any>(this._changePassword, player, {
      withCredentials: true,
    });
  }
  uploadAvatar(formData: FormData) {
    return this.http.put<any>(this._uploadAvatar, formData, {
      withCredentials: true,
    });
  }
}
