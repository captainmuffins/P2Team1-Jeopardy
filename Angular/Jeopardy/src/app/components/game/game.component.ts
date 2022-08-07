import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { ObjectUnsubscribedError } from 'rxjs';
import { jeopardyservice } from 'src/app/jeopardyservice';
import { Clue } from 'src/app/models/clue/clue';
import { CategorySelectorComponent } from '../category-selector/category-selector.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public Bob:Array<number>;
  
  public a:number = 1;
  public b:number = 2;
  public c:number = 3;
  public d:number = 4;
  public e:number = 5;
  public v:number = 1;
  constructor(private Js:jeopardyservice, private CS:CategorySelectorComponent,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.a = params['a'];
      this.b = params['b'];
      this.c = params['c'];
      this.d = params['d'];
      this.e = params['e'];}
      )
    this.Bob=[this.a,this.b,this.c,this.d,this.e]
    console.log(this.Bob);
   }
  public A: Array<number>= this.CS.Bob;

  public i:number = 0; 
  public value:number = 1;
  public MAN:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
   public C2C1:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C3C1:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C4C1:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C5C1:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C1C2:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C2C2:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C3C2:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C4C2:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C5C2:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };  
  public C1C3:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C2C3:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C3C3:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C4C3:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C5C3:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C1C4:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C2C4:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C3C4:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C4C4:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C5C4:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C1C5:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C2C5:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C3C5:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C4C5:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C5C5:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public C1C1:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  // shall I make 25 different variables so I can have one for each shell yes I shall,
  CheckCheck(){
    console.log(this.C1C1.id)
  }
  //check check
  async StartGame(){
    for (this.i;this.i<5;this.i++){
      for(this.value;this.value<=5;this.value=this.value+1){
        this.Js.getQuestionFromApi(this.Bob[this.i], this.value*100).subscribe(
          (data:any)=>{this.MAN=data.body[0]
            if(this.C1C1.id==0){
              this.C1C1=this.MAN;
              console.log(this.C1C1)
            } else if (this.C1C2.id==0){
              this.C1C2=this.MAN;
              console.log(this.C1C2)
            }
            else if (this.C1C3.id==0){
              this.C1C3=this.MAN;
              console.log(this.C1C3)
            }else if (this.C1C4.id==0){
              this.C1C4=this.MAN;
              console.log(this.C1C4)
            }else if (this.C1C5.id==0){
              this.C1C5=this.MAN;
              console.log(this.C1C5)
              this.value=1;
            }
          },()=>{console.log("it got away")}
          
          );
          console.log(this.Bob[this.i]);
          console.log(this.value);
        }
        console.log(this.Bob[this.i]);
    }
  }
  
 
  
  ngOnInit(): void {
  }

}
