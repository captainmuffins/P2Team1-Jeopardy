import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JeopardyService {
  private _getCategory = 'https://jservice.io/api/category';

  constructor(private http: HttpClient) {}
  getCategory(catId: number) {
    return this.http.get<any>(this._getCategory + '?id=' + catId);
  }
}
