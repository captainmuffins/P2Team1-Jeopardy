import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JeopardyService {
  private _getCategory = 'https://jservice.io/api/category';
  private _getClues = 'http://jservice.io/api/clues';

  constructor(private http: HttpClient) {}
  getCategory(catId: number) {
    return this.http.get<any>(this._getCategory + '?id=' + catId);
  }

  getClues(scoreVal: number, catId: number) {
    return this.http.get(
      this._getClues + '?value=' + scoreVal + '&category=' + catId
    );
  }
}
