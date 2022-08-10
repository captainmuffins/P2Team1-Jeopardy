import { Component, ElementRef, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category/category';
import { jeopardyservice } from 'src/app/jeopardyservice';
import { Router } from '@angular/router';
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
  public thisistest:number=this.Gem;
  //made Js as a service to connect to the Api
  constructor(private Js:jeopardyservice, private _router: Router) { }

  getCategory(gem: number){
    this.Js.getCategoryFromApi(gem).subscribe(
      (data:any)=>{
        this.Category=data.body;
        console.log(this.Category)
        
      },
    ()=>{console.log("it got away")}
  
      )
  }
  buttonPress(gem:number){
    this.Gem = gem;
    this.SelCat(gem);
    this.getCategory(gem);
    this.thisistest = this.Js.Category.id;
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
  public Sab:number=0;

  SubmitButton(){
    if(this.a!=0){
      if(this.b!=0){
        if(this.c!=0){
          if(this.d!=0){
            this.Bob=[this.a,this.b,this.c,this.d,this.e]
            console.log(this.Bob);
            this._router.navigate(['/GemlinTest'], { queryParams: { a: this.a, b:this.b, c: this.c, d:this.d,e:648,Sab:4} });
          }else{
            this.Bob=[this.a,this.b,this.c,this.d,this.e]
            console.log(this.Bob);
            this._router.navigate(['/GemlinTest'], { queryParams: { a: this.a, b:this.b, c: this.c, d:975,e:648,Sab:3} });
          }
        }else{this.Bob=[this.a,this.b,this.c,this.d,this.e]
        console.log(this.Bob);
        this._router.navigate(['/GemlinTest'], { queryParams: { a: this.a, b:this.b, c: 810, d:975,e:648,Sab:2} });}
      }else{this.Bob=[this.a,this.b,this.c,this.d,this.e]
        console.log(this.Bob);
        this._router.navigate(['/GemlinTest'], { queryParams: { a: this.a, b:1028, c: 810, d:975,e:648,Sab:1} });}
    }
  }
  SelCat(Gem: number){
    // the previous logic allowed for duplicate categories,
    // now it shall be fixxed!!
    if(Gem==this.a){
      this.a = 0
      return
    }
    if(Gem==this.b){
      this.b = 0
      return
    }
    if(Gem==this.c){
      this.c = 0
      return
    }
    if(Gem==this.d){
      this.d = 0
      return
    }
    if(Gem==this.e){
      this.e = 0
      return
    }
   
    if (this.a==0){
      this.a = Gem;
      console.log(this.a);
    }else if(this.b==0 ){
      this.b=Gem;
      console.log(this.b);
    }else if (this.c==0 ){
      this.c = Gem;
      console.log(this.c);
    }else if(this.d==0 ){
      this.d=Gem;
      console.log(this.d);
    }else if(this.e == 0){
      this.e=Gem;
      console.log(this.e);} 

    // I think I need a dup close check. 
    // maybe imlementation of that is better on the button, so the button changes Gem to the specified number
    // unless the id is already in use then it nullifies both cases where it is found.
    //that can be a switch... so switch on Gem, case this.a then this.a = 0, case this.b then this.b=0... default: SelCat(Gem);
    // this will make the first instance of a duplicate 0 which should work fine as the SelCat works from start to end,
    //so if our 5th choice is the same as our 1st choice then our 1st choice becomes zero and waits for the input of the next button. 
      if (this.a!=0 && this.b!=0 && this.c!=0 && this.d!=0 && this.e!=0){
        //go to Game component with Bob.{
      this.Bob=[this.a,this.b,this.c,this.d,this.e]
    console.log(this.Bob);
    this._router.navigate(['/GemlinTest'], { queryParams: { a: this.a, b:this.b, c: this.c, d:this.d,e:this.e,Sab:5} });
    }
      
  }

  ngOnInit(): void {
  }

}
