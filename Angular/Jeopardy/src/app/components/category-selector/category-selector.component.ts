import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category/category';
import { jeopardyservice } from 'src/app/jeopardyservice';
@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})
export class CategorySelectorComponent implements OnInit {
 
  //129 default cause why not... :) :) :sableye :) 
  public input:number = 360;

  //gonna make a model Category and a model question
  public Category:Category={
    id: 0,
    title:"",
    clues_count: 0 
  }
  public Sableye: number = 0;
  //made Js as a service to connect to the Api
  constructor(private Js:jeopardyservice) { }
  
  getCategory(){
    this.Js.getCategoryFromApi(this.input).subscribe()
  }

  Counter(){
    this.Sableye = this.Sableye+1;
    if(this.Sableye==5){
      //go to the game is the idea, with 5 ids for the 5 categories
    }
  }

  ngOnInit(): void {
  }

}
