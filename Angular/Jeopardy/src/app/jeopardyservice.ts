import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './models/category/category';

@Injectable({
  providedIn: 'root'
})
export class jeopardyservice {

  constructor(private http:HttpClient) { }
//HOPEFULLY this gets a proper category as a response.
//it says I need an Id to get a category not sure if it needs it like this or if the int raw can do.
  getCategoryFromApi(id:number):Observable<HttpResponse<Category>>{
    const criteria = [ {id: id}];
    return this.http.get("http://jservice.io/api/"+ encodeURIComponent( JSON.stringify(criteria)), {observe:"response"}) as Observable<HttpResponse<Category>>
  }
}
