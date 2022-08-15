import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './models/category/category';
import { Title } from '@angular/platform-browser';
import { Clue } from './models/clue/clue';

@Injectable({
  providedIn: 'root',
})
export class jeopardyservice {
  constructor(private http: HttpClient) {}
  Category: Category = {
    id: 0,
    title: '',
    clues_count: 0,
  };

  Clue: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  //HOPEFULLY this gets a proper category as a response.
  //it says I need an Id to get a category not sure if it needs it like this or if the int raw can do.
  getCategoryFromApi(id: number): Observable<HttpResponse<Category>> {
    return this.http.get('https://jservice.io/api/category?id=' + id, {
      observe: 'response',
    }) as Observable<HttpResponse<Category>>;
  }
  getQuestionFromApi(Gem: number, i: number): Observable<HttpResponse<Clue>> {
    return this.http.get(
      'https://jservice.io/api/clues?value=' + i + '&category=' + Gem,
      { observe: 'response' }
    ) as Observable<HttpResponse<Clue>>;
  }
}
