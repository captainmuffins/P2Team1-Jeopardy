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
  public Gem:number = 360;

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
    this.Js.getCategoryFromApi(this.Gem).subscribe()
  }
  //Some logic to choose 5 categories, the Gem should be found by clicking the button, 
  //the button should be made with the get category function, so an id is given to Category, then we will use the Bob array
  //to pass the 5 categories selected to the Game component. 
  public a:number=0;
  public b:number=0;
  public c:number=0;
  public d:number=0;
  public e:number=0;
  public Bob=[this.a,this.b,this.c,this.d,this.e];

  SelCat(Gem: number){
    if (this.a==0){
      this.a = Gem;
    }else if(this.a==0){
      this.b=Gem;
    }else if (this.a==0){
      this.c = Gem;
    }else if(this.a==0){
      this.d=Gem;
    }else if(this.e == 0){
      this.e=Gem;}
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
