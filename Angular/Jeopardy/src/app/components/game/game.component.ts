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
    console.log(this.C1C1.answer)
    console.log(this.C1C2.answer)
    console.log(this.C1C3.answer)
    console.log(this.C1C4.answer)
    console.log(this.C1C5.answer)

    console.log(this.C5C1.answer)
    console.log(this.C5C2.answer)
    console.log(this.C5C3.answer)
    console.log(this.C5C4.answer)
    console.log(this.C5C5.answer)

    console.log(this.C2C1.answer)
    console.log(this.C2C2.answer)
    console.log(this.C2C3.answer)
    console.log(this.C2C4.answer)
    console.log(this.C2C5.answer)

    console.log(this.C3C1.answer)
    console.log(this.C3C2.answer)
    console.log(this.C3C3.answer)
    console.log(this.C3C4.answer)
    console.log(this.C3C5.answer)
    
    console.log(this.C4C1.answer)
    console.log(this.C4C2.answer)
    console.log(this.C4C3.answer)
    console.log(this.C4C4.answer)
    console.log(this.C4C5.answer)
  }
  //check check
  async StartGame(){
      for(this.value;this.value<=5;this.value=this.value+1){
        this.Js.getQuestionFromApi(this.Bob[0], this.value*100).subscribe(
          (data:any)=>{this.MAN=data.body[0]
            if(this.C1C1.id==0){
              this.C1C1=this.MAN;
              console.log(this.C1C1)
            } else if (this.C1C2.id==0){
              this.C1C2=this.MAN;
              console.log(this.C1C2)
            }else if (this.C1C3.id==0){
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
          },()=>{console.log("it got away")});
        }this.value=1;
    for(this.value;this.value<=5;this.value=this.value+1){
      this.Js.getQuestionFromApi(this.Bob[1], this.value*100).subscribe(
        (data:any)=>{this.MAN=data.body[0]
          if(this.C2C1.id==0){
            this.C2C1=this.MAN;
            console.log(this.C2C1)
          } else if (this.C2C2.id==0){
            this.C2C2=this.MAN;
            console.log(this.C2C2)
          }else if (this.C2C3.id==0){
            this.C2C3=this.MAN;
            console.log(this.C2C3)
          }else if (this.C2C4.id==0){
            this.C2C4=this.MAN;
            console.log(this.C2C4)
          }else if (this.C2C5.id==0){
            this.C2C5=this.MAN;
            console.log(this.C2C5)
          }
        },()=>{console.log("it got away")}
        
        );
        
      } this.value=1;
      for(this.value;this.value<=5;this.value=this.value+1){
        this.Js.getQuestionFromApi(this.Bob[2], this.value*100).subscribe(
          (data:any)=>{this.MAN=data.body[0]
            if(this.C3C1.id==0){
              this.C3C1=this.MAN;
              console.log(this.C3C1)
            } else if (this.C3C2.id==0){
              this.C3C2=this.MAN;
              console.log(this.C3C2)
            }
            else if (this.C3C3.id==0){
              this.C3C3=this.MAN;
              console.log(this.C3C3)
            }else if (this.C3C4.id==0){
              this.C3C4=this.MAN;
              console.log(this.C3C4)
            }else if (this.C3C5.id==0){
              this.C3C5=this.MAN;
              console.log(this.C3C5)
            }
          },()=>{console.log("it got away")}
          
          );
        }this.value=1;
    for(this.value;this.value<=5;this.value=this.value+1){
      this.Js.getQuestionFromApi(this.Bob[3], this.value*100).subscribe(
        (data:any)=>{this.MAN=data.body[0]
          if(this.C5C1.id==0){
            this.C5C1=this.MAN;
            console.log(this.C5C1)
          } else if (this.C5C2.id==0){
            this.C5C2=this.MAN;
            console.log(this.C5C2)
          }else if (this.C5C3.id==0){
            this.C5C3=this.MAN;
            console.log(this.C5C3)
          }else if (this.C5C4.id==0){
            this.C5C4=this.MAN;
            console.log(this.C5C4)
          }else if (this.C5C5.id==0){
            this.C5C5=this.MAN;
            console.log(this.C5C5)
          }
        },()=>{console.log("it got away")}
        
        );  
      }this.value=1;
      for(this.value;this.value<=5;this.value=this.value+1){
        this.Js.getQuestionFromApi(this.Bob[4], this.value*100).subscribe(
          (data:any)=>{this.MAN=data.body[0]
            if(this.C4C1.id==0){
              this.C4C1=this.MAN;
              console.log(this.C4C1)
            } else if (this.C4C2.id==0){
              this.C4C2=this.MAN;
              console.log(this.C4C2)
            }else if (this.C4C3.id==0){
              this.C4C3=this.MAN;
              console.log(this.C4C3)
            }else if (this.C4C4.id==0){
              this.C4C4=this.MAN;
              console.log(this.C4C4)
            }else if (this.C4C5.id==0){
              this.C4C5=this.MAN;
              console.log(this.C4C5)
            }
          },()=>{console.log("it got away")}
          
          );
          
        }
  }
  

  
 
  
  ngOnInit(): void {
  }

}
