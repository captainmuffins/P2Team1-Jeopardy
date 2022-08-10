import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JeopardyService {
  private _getCategories = 'http://jservice.io/api/categories';

  constructor(private http: HttpClient) {}
  getCategories(count: number, offset: number) {
    return this.http.get<any>(this._getCategories + '?count=' + count + '&offset=' + offset);
  }
}
