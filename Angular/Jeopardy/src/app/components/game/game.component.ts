import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { ObjectUnsubscribedError } from 'rxjs';
import { jeopardyservice } from 'src/app/jeopardyservice';
import { Category } from 'src/app/models/category/category';
import { Clue } from 'src/app/models/clue/clue';
import { CategorySelectorComponent } from '../category-selector/category-selector.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public Bob:Array<number>;
  public Sab:number=5;
  public a:number = 1;
  public b:number = 2;
  public c:number = 3;
  public d:number = 4;
  public e:number = 5;
  public v:number = 1;
  public Gremlin:Boolean=false;
  constructor(private Js:jeopardyservice, private CS:CategorySelectorComponent,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.a = params['a'];
      this.b = params['b'];
      this.c = params['c'];
      this.d = params['d'];
      this.e = params['e'];
      this.Sab = params['Sab'];}
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
    if (this.Sab>=1){
    console.log(this.C1C1.answer)
    console.log(this.C1C2.answer)
    console.log(this.C1C3.answer)
    console.log(this.C1C4.answer)
    console.log(this.C1C5.answer)
    }
    if(this.Sab==5){
    console.log(this.C5C1.answer)
    console.log(this.C5C2.answer)
    console.log(this.C5C3.answer)
    console.log(this.C5C4.answer)
    console.log(this.C5C5.answer)
    }
    if (this.Sab>=2){
    console.log(this.C2C1.answer)
    console.log(this.C2C2.answer)
    console.log(this.C2C3.answer)
    console.log(this.C2C4.answer)
    console.log(this.C2C5.answer)
    }
    if (this.Sab>=3){
    console.log(this.C3C1.answer)
    console.log(this.C3C2.answer)
    console.log(this.C3C3.answer)
    console.log(this.C3C4.answer)
    console.log(this.C3C5.answer)
    }
    if (this.Sab>=4){
    console.log(this.C4C1.answer)
    console.log(this.C4C2.answer)
    console.log(this.C4C3.answer)
    console.log(this.C4C4.answer)
    console.log(this.C4C5.answer)
  }
  } 
  //check check
  /*async StartGame(){
      for(this.value;this.value<=5;this.value=this.value+1){
        this.Js.getQuestionFromApi(this.Bob[0], this.value*100).subscribe(
          (data:any)=>{this.MAN=data.body[0]
            if(this.C1C1.id==0){
              this.C1C1=this.MAN;
              console.log(this.C1C1)
            }else if (this.C1C2.id==0){
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
          } }*/
  /*async Testing(){
  for(this.i=0;this.i<=4;this.i++){
   for(this.value;this.value<=5;this.value=this.value+1){
    this.Js.getQuestionFromApi(this.Bob[this.i], this.value*100).subscribe(
     (data:any)=>{this.MAN=data.body[0]
        if(this.C1C1.id==0&&this.i==0){
          this.C1C1=this.MAN;
          console.log(this.C1C1)
        }else if (this.C1C2.id==0&&this.i==0){
          this.C1C2=this.MAN;
          console.log(this.C1C2)
        }else if (this.C1C3.id==0&&this.i==0){
          this.C1C3=this.MAN;
          console.log(this.C1C3)
        }else if (this.C1C4.id==0&&this.i==0){
          this.C1C4=this.MAN;
          console.log(this.C1C4)
        }else if (this.C1C5.id==0&&this.i==0){
          this.C1C5=this.MAN;
          console.log(this.C1C5)
          
        }else if (this.C2C1.id==0&&this.i==1){
          this.C2C1=this.MAN;
          console.log(this.C2C1)
        }else if (this.C2C2.id==0&&this.i==1){
          this.C2C2=this.MAN;
          console.log(this.C2C2)
        }else if (this.C2C3.id==0&&this.i==1){
          this.C2C3=this.MAN;
          console.log(this.C2C3)
        }else if (this.C2C4.id==0&&this.i==1){
          this.C2C4=this.MAN;
          console.log(this.C2C4)
        }else if (this.C2C5.id==0&&this.i==1){
          this.C2C5=this.MAN;
        }else if (this.C3C1.id==0&&this.i==2){
          this.C3C1=this.MAN;
          console.log(this.C3C1)
        }else if (this.C3C2.id==0&&this.i==2){
          this.C3C2=this.MAN;
          console.log(this.C3C2)
        }else if (this.C3C3.id==0&&this.i==2){
          this.C3C3=this.MAN;
          console.log(this.C3C3)
        }else if (this.C3C4.id==0&&this.i==2){
          this.C3C4=this.MAN;
          console.log(this.C3C4)
        }else if (this.C3C5.id==0&&this.i==2){
          this.C3C5=this.MAN;
          console.log(this.C3C5)
        }else if (this.C5C1.id==0&&this.i==4){
          this.C5C1=this.MAN;
          console.log(this.C5C1)
        }else if (this.C5C2.id==0&&this.i==4){
          this.C5C2=this.MAN;
          console.log(this.C5C2)
        }else if (this.C5C3.id==0&&this.i==4){
          this.C5C3=this.MAN;
          console.log(this.C5C3)
        }else if (this.C5C4.id==0&&this.i==4){
          this.C5C4=this.MAN;
          console.log(this.C5C4)
        }else if (this.C5C5.id==0&&this.i==4){
          this.C5C5=this.MAN;
          console.log(this.C5C5)
        }else if (this.C4C1.id==0&&this.i==3){
          this.C4C1=this.MAN;
          console.log(this.C4C1)
        }else if (this.C4C2.id==0&&this.i==3){
          this.C4C2=this.MAN;
          console.log(this.C4C2)
        }else if (this.C4C3.id==0&&this.i==3){
          this.C4C3=this.MAN;
          console.log(this.C4C3)
        }else if (this.C4C4.id==0&&this.i==3){
          this.C4C4=this.MAN;
          console.log(this.C4C4)
        }else if (this.C4C5.id==0&&this.i==3){
          this.C4C5=this.MAN;
          console.log(this.C4C5)
        }else{this.value=1;}
      },()=>{console.log("it got away")});
    } this.value=1;
    console.log(this.i)
  } 
    }*/
 async Test2(){
  if (this.Sab>=1){
for(this.value;this.value<=5;this.value=this.value+1){
    this.Js.getQuestionFromApi(this.Bob[0], this.value*100).subscribe(
      (data:any)=>{this.MAN=data.body[0]
        if(this.C1C1.id==0){
          this.C1C1=this.MAN;
          console.log(this.C1C1)
        }else if (this.C1C2.id==0){
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
    }this.value=1;}
  if(this.Sab>=2){
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
    
  } this.value=1;}
  if(this.Sab>=3){
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
    }this.value=1;}
  if(this.Sab>=5){
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
  }this.value=1;}
  if(this.Sab>=4){
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
      }}
 }
  public D1:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public D2:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public D3:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public D4:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public D5:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public D6:Clue={
    id:0,
    answer:"",
    question:"",
    value:0,
    category_id:0
  };
  public Cat1:Category={
    id:0,
    title:"",
    clues_count:0
  }
  public Cat2:Category={
    id:0,
    title:"",
    clues_count:0
  }
  public Cat3:Category={
    id:0,
    title:"",
    clues_count:0
  }
  public Cat5:Category={
    id:0,
    title:"",
    clues_count:0
  }
  public Cat4:Category={
    id:0,
    title:"",
    clues_count:0
  }

  public j:number=0;
  public Bu2:Boolean=false;
  NameTheCats(){
    this.Gremlin=true;
    if(this.Sab>=1){this.Js.getCategoryFromApi(this.C1C1.category_id).subscribe((data:any)=>{this.Cat1=data.body},()=>{console.log("somethingwentwrong")});}
    if(this.Sab>=2){this.Js.getCategoryFromApi(this.C2C1.category_id).subscribe((data:any)=>{this.Cat2=data.body},()=>{console.log("somethingwentwrong")});}
    if(this.Sab>=3){this.Js.getCategoryFromApi(this.C3C1.category_id).subscribe((data:any)=>{this.Cat3=data.body},()=>{console.log("somethingwentwrong")});}
    if(this.Sab==5){this.Js.getCategoryFromApi(this.C5C1.category_id).subscribe((data:any)=>{this.Cat5=data.body},()=>{console.log("somethingwentwrong")});}
    if(this.Sab>=4){this.Js.getCategoryFromApi(this.C4C1.category_id).subscribe((data:any)=>{this.Cat4=data.body},()=>{console.log("somethingwentwrong")});}
    /*if we wanted a Go back button here Should go the Boolean for it to appear.*/}
  SortC1(){
    this.D1=this.C1C1;
    this.D2=this.C1C2;
    this.D3=this.C1C3;
    this.D4=this.C1C4;
    this.D5=this.C1C5;
    for(this.j=0;this.j<10;this.j++){
      if(this.D1.value<this.D2.value)
      {}else if(this.D1.value>this.D2.value){
        this.D6=this.D1
        this.D1=this.D2
        this.D2=this.D6
      }if(this.D2.value<this.D3.value)
      {}else if(this.D2.value>this.D3.value){
        this.D6=this.D2
        this.D2=this.D3
        this.D3=this.D6
      }if(this.D3.value<this.D4.value)
      {}else if(this.D3.value>this.D4.value){
        this.D6=this.D3
        this.D3=this.D4
        this.D4=this.D6
      }if(this.D4.value<this.D5.value)
      {}else if(this.D4.value>this.D5.value){
        this.D6=this.D4
        this.D4=this.D5
        this.D5=this.D6
      }}
    this.C1C1=this.D1;
    this.C1C2=this.D2;
    this.C1C3=this.D3;
    this.C1C4=this.D4;
    this.C1C5=this.D5;
    this.D1=this.C2C1;
    this.D2=this.C2C2;
    this.D3=this.C2C3;
    this.D4=this.C2C4;
    this.D5=this.C2C5;
    for(this.j=0;this.j<10;this.j++){
      if(this.D1.value<this.D2.value)
      {}else if(this.D1.value>this.D2.value){
        this.D6=this.D1
        this.D1=this.D2
        this.D2=this.D6
      }if(this.D2.value<this.D3.value)
      {}else if(this.D2.value>this.D3.value){
        this.D6=this.D2
        this.D2=this.D3
        this.D3=this.D6
      }if(this.D3.value<this.D4.value)
      {}else if(this.D3.value>this.D4.value){
        this.D6=this.D3
        this.D3=this.D4
        this.D4=this.D6
      }if(this.D4.value<this.D5.value)
      {}else if(this.D4.value>this.D5.value){
        this.D6=this.D4
        this.D4=this.D5
        this.D5=this.D6
      }}
    this.C2C1=this.D1;
    this.C2C2=this.D2;
    this.C2C3=this.D3;
    this.C2C4=this.D4;
    this.C2C5=this.D5;
    this.D1=this.C3C1;
    this.D2=this.C3C2;
    this.D3=this.C3C3;
    this.D4=this.C3C4;
    this.D5=this.C3C5;
    for(this.j=0;this.j<10;this.j++){
      if(this.D1.value<this.D2.value)
      {}else if(this.D1.value>this.D2.value){
        this.D6=this.D1
        this.D1=this.D2
        this.D2=this.D6
      }if(this.D2.value<this.D3.value)
      {}else if(this.D2.value>this.D3.value){
        this.D6=this.D2
        this.D2=this.D3
        this.D3=this.D6
      }if(this.D3.value<this.D4.value)
      {}else if(this.D3.value>this.D4.value){
        this.D6=this.D3
        this.D3=this.D4
        this.D4=this.D6
      }if(this.D4.value<this.D5.value)
      {}else if(this.D4.value>this.D5.value){
        this.D6=this.D4
        this.D4=this.D5
        this.D5=this.D6
      }}
    this.C3C1=this.D1;
    this.C3C2=this.D2;
    this.C3C3=this.D3;
    this.C3C4=this.D4;
    this.C3C5=this.D5;
    this.D1=this.C4C1;
    this.D2=this.C4C2;
    this.D3=this.C4C3;
    this.D4=this.C4C4;
    this.D5=this.C4C5;
    for(this.j=0;this.j<10;this.j++){
      if(this.D1.value<this.D2.value)
      {}else if(this.D1.value>this.D2.value){
        this.D6=this.D1
        this.D1=this.D2
        this.D2=this.D6
      }if(this.D2.value<this.D3.value)
      {}else if(this.D2.value>this.D3.value){
        this.D6=this.D2
        this.D2=this.D3
        this.D3=this.D6
      }if(this.D3.value<this.D4.value)
      {}else if(this.D3.value>this.D4.value){
        this.D6=this.D3
        this.D3=this.D4
        this.D4=this.D6
      }if(this.D4.value<this.D5.value)
      {}else if(this.D4.value>this.D5.value){
        this.D6=this.D4
        this.D4=this.D5
        this.D5=this.D6
      }}
    this.C4C1=this.D1;
    this.C4C2=this.D2;
    this.C4C3=this.D3;
    this.C4C4=this.D4;
    this.C4C5=this.D5;
    this.D1=this.C5C1;
    this.D2=this.C5C2;
    this.D3=this.C5C3;
    this.D4=this.C5C4;
    this.D5=this.C5C5;
    for(this.j=0;this.j<10;this.j++){
      if(this.D1.value<this.D2.value)
      {}else if(this.D1.value>this.D2.value){
        this.D6=this.D1
        this.D1=this.D2
        this.D2=this.D6
      }if(this.D2.value<this.D3.value)
      {}else if(this.D2.value>this.D3.value){
        this.D6=this.D2
        this.D2=this.D3
        this.D3=this.D6
      }if(this.D3.value<this.D4.value)
      {}else if(this.D3.value>this.D4.value){
        this.D6=this.D3
        this.D3=this.D4
        this.D4=this.D6
      }if(this.D4.value<this.D5.value)
      {}else if(this.D4.value>this.D5.value){
        this.D6=this.D4
        this.D4=this.D5
        this.D5=this.D6
      }}
    this.C5C1=this.D1;
    this.C5C2=this.D2;
    this.C5C3=this.D3;
    this.C5C4=this.D4;
    this.C5C5=this.D5;

    this.Bu2=true;
  }
  CheckCheckValuesC1(){
    console.log(this.C1C1.value);
    console.log(this.C1C2.value);
    console.log(this.C1C3.value);
    console.log(this.C1C4.value);
    console.log(this.C1C5.value);
  }
  CheckCheckValuesC2(){
    console.log(this.C2C1.value);
    console.log(this.C2C2.value);
    console.log(this.C2C3.value);
    console.log(this.C2C4.value);
    console.log(this.C2C5.value);
  }
  CheckCheckValuesC3(){
    console.log(this.C3C1.value);
    console.log(this.C3C2.value);
    console.log(this.C3C3.value);
    console.log(this.C3C4.value);
    console.log(this.C3C5.value);
  }
  CheckCheckValuesC4(){
    console.log(this.C4C1.value);
    console.log(this.C4C2.value);
    console.log(this.C4C3.value);
    console.log(this.C4C4.value);
    console.log(this.C4C5.value);
  }
  CheckCheckValuesC5(){
    console.log(this.C5C1.value);
    console.log(this.C5C2.value);
    console.log(this.C5C3.value);
    console.log(this.C5C4.value);
    console.log(this.C5C5.value);
  }

  public Q11: Boolean=false;
  public Q12: Boolean=false;
  public Q13: Boolean=false;
  public Q14: Boolean=false;
  public Q15: Boolean=false;
  public Q21: Boolean=false;
  public Q22: Boolean=false;
  public Q23: Boolean=false;
  public Q24: Boolean=false;
  public Q25: Boolean=false;
  public Q31: Boolean=false;
  public Q32: Boolean=false;
  public Q33: Boolean=false;
  public Q34: Boolean=false;
  public Q35: Boolean=false;
  public Q41: Boolean=false;
  public Q42: Boolean=false;
  public Q43: Boolean=false;
  public Q44: Boolean=false;
  public Q45: Boolean=false;
  public Q51: Boolean=false;
  public Q52: Boolean=false;
  public Q53: Boolean=false;
  public Q54: Boolean=false;
  public Q55: Boolean=false;
  QuestionButton(value:number,Cat:number){
    if (value==1&&Cat==1){
      this.Q11=true;
      this.N11=true;
    }
    if (value==2&&Cat==1){
      this.Q12=true;
      this.N12=true;
    }
    if (value==3&&Cat==1){
      this.Q13=true;
      this.N13=true;
    }
    if (value==4&&Cat==1){
      this.Q14=true;
      this.N14=true;
    }
    if (value==5&&Cat==1){
      this.Q15=true;
      this.N15=true;
    }
    if (value==1&&Cat==2){
      this.Q21=true;
      this.N21=true;
    }
    if (value==2&&Cat==2){
      this.Q22=true;
      this.N22=true;
    }
    if (value==3&&Cat==2){
      this.Q23=true;
      this.N23=true;
    }
    if (value==4&&Cat==2){
      this.Q24=true;
      this.N24=true;
    }
    if (value==5&&Cat==2){
      this.Q25=true;
      this.N25=true;
    }
    if (value==1&&Cat==3){
      this.Q31=true;
      this.N31=true;
    }
    if (value==2&&Cat==3){
      this.Q32=true;
      this.N32=true;
    }
    if (value==3&&Cat==3){
      this.Q33=true;
      this.N33=true;
    }
    if (value==4&&Cat==3){
      this.Q34=true;
      this.N34=true;
    }
    if (value==5&&Cat==3){
      this.Q35=true;
      this.N35=true;
    }
    if (value==1&&Cat==4){
      this.Q41=true;
      this.N41=true;
    }
    if (value==2&&Cat==4){
      this.Q42=true;
      this.N42=true;
    }
    if (value==3&&Cat==4){
      this.Q43=true;
      this.N43=true;
    }
    if (value==4&&Cat==4){
      this.Q44=true;
      this.N44=true;
    }
    if (value==5&&Cat==4){
      this.Q45=true;
      this.N45=true;
    }
    if (value==1&&Cat==5){
      this.Q51=true;
      this.N51=true;
    }
    if (value==2&&Cat==5){
      this.Q52=true;
      this.N52=true;
    }
    if (value==3&&Cat==5){
      this.Q53=true;
      this.N53=true;
    }
    if (value==4&&Cat==5){
      this.Q54=true;
      this.N54=true;
    }
    if (value==5&&Cat==5){
      this.Q55=true;
      this.N55=true;
    }
  }

  public N11: Boolean=false;
  public N12: Boolean=false;
  public N13: Boolean=false;
  public N14: Boolean=false;
  public N15: Boolean=false;
  public N21: Boolean=false;
  public N22: Boolean=false;
  public N23: Boolean=false;
  public N24: Boolean=false;
  public N25: Boolean=false;
  public N31: Boolean=false;
  public N32: Boolean=false;
  public N33: Boolean=false;
  public N34: Boolean=false;
  public N35: Boolean=false;
  public N41: Boolean=false;
  public N42: Boolean=false;
  public N43: Boolean=false;
  public N44: Boolean=false;
  public N45: Boolean=false;
  public N51: Boolean=false;
  public N52: Boolean=false;
  public N53: Boolean=false;
  public N54: Boolean=false;
  public N55: Boolean=false;

  public A11: Boolean=false;
  public A12: Boolean=false;
  public A13: Boolean=false;
  public A14: Boolean=false;
  public A15: Boolean=false;
  public A21: Boolean=false;
  public A22: Boolean=false;
  public A23: Boolean=false;
  public A24: Boolean=false;
  public A25: Boolean=false;
  public A31: Boolean=false;
  public A32: Boolean=false;
  public A33: Boolean=false;
  public A34: Boolean=false;
  public A35: Boolean=false;
  public A41: Boolean=false;
  public A42: Boolean=false;
  public A43: Boolean=false;
  public A44: Boolean=false;
  public A45: Boolean=false;
  public A51: Boolean=false;
  public A52: Boolean=false;
  public A53: Boolean=false;
  public A54: Boolean=false;
  public A55: Boolean=false;
  Buttoon(value:number,Cat:number){
    if(value==1&&Cat==1){
      this.Q11=false;
      this.A11=true;
    }
    if(value==2&&Cat==1){
      this.Q12=false;
      this.A12=true;
    }
    if(value==3&&Cat==1){
      this.Q13=false;
      this.A13=true;
    }
    if(value==4&&Cat==1){
      this.Q14=false;
      this.A14=true;
    }
    if(value==5&&Cat==1){
      this.Q15=false;
      this.A15=true;
    }
    if(value==1&&Cat==2){
      this.Q21=false;
      this.A21=true;
    }
    if(value==2&&Cat==2){
      this.Q22=false;
      this.A22=true;
    }
    if(value==3&&Cat==2){
      this.Q23=false;
      this.A23=true;
    }
    if(value==4&&Cat==2){
      this.Q24=false;
      this.A24=true;
    }
    if(value==5&&Cat==2){
      this.Q25=false;
      this.A25=true;
    }
    if(value==1&&Cat==3){
      this.Q31=false;
      this.A31=true;
    }
    if(value==2&&Cat==3){
      this.Q32=false;
      this.A32=true;
    }
    if(value==3&&Cat==3){
      this.Q33=false;
      this.A33=true;
    }
    if(value==4&&Cat==3){
      this.Q34=false;
      this.A34=true;
    }
    if(value==5&&Cat==3){
      this.Q35=false;
      this.A35=true;
    }
    if(value==1&&Cat==4){
      this.Q41=false;
      this.A41=true;
    }
    if(value==2&&Cat==4){
      this.Q42=false;
      this.A42=true;
    }
    if(value==3&&Cat==4){
      this.Q43=false;
      this.A43=true;
    }
    if(value==4&&Cat==4){
      this.Q44=false;
      this.A44=true;
    }
    if(value==5&&Cat==4){
      this.Q45=false;
      this.A45=true;
    }
    if(value==1&&Cat==5){
      this.Q51=false;
      this.A51=true;
    }
    if(value==2&&Cat==5){
      this.Q52=false;
      this.A52=true;
    }
    if(value==3&&Cat==5){
      this.Q53=false;
      this.A53=true;
    }
    if(value==4&&Cat==5){
      this.Q54=false;
      this.A54=true;
    }
    if(value==5&&Cat==5){
      this.Q55=false;
      this.A55=true;
    }
  }

  public H11: Boolean=false;
  public H12: Boolean=false;
  public H13: Boolean=false;
  public H14: Boolean=false;
  public H15: Boolean=false;
  public H21: Boolean=false;
  public H22: Boolean=false;
  public H23: Boolean=false;
  public H24: Boolean=false;
  public H25: Boolean=false;
  public H31: Boolean=false;
  public H32: Boolean=false;
  public H33: Boolean=false;
  public H34: Boolean=false;
  public H35: Boolean=false;
  public H41: Boolean=false;
  public H42: Boolean=false;
  public H43: Boolean=false;
  public H44: Boolean=false;
  public H45: Boolean=false;
  public H51: Boolean=false;
  public H52: Boolean=false;
  public H53: Boolean=false;
  public H54: Boolean=false;
  public H55: Boolean=false;
  public Succ:boolean=false;
  public Score:number=0;
  public Counter:number=0;
  AnswerCleanUp(value:number,Cat:number){
    if(value==1&&Cat==1){
      this.Q11=false;
      this.A11=false;
      this.Counter++;
    }
    if(value==2&&Cat==1){
      this.Q12=false;
      this.A12=false;
      this.Counter++;
    }
    if(value==3&&Cat==1){
      this.Q13=false;
      this.A13=false;
      this.Counter++;
    }
    if(value==4&&Cat==1){
      this.Q14=false;
      this.A14=false;
      this.Counter++;
    }
    if(value==5&&Cat==1){
      this.Q15=false;
      this.A15=false;
      this.Counter++;
    }
    if(value==1&&Cat==2){
      this.Q21=false;
      this.A21=false;
      this.Counter++;
    }
    if(value==2&&Cat==2){
      this.Q22=false;
      this.A22=false;
      this.Counter++;
    }
    if(value==3&&Cat==2){
      this.Q23=false;
      this.A23=false;
      this.Counter++;
    }
    if(value==4&&Cat==2){
      this.Q24=false;
      this.A24=false;
      this.Counter++;
    }
    if(value==5&&Cat==2){
      this.Q25=false;
      this.A25=false;
      this.Counter++;
    }
    if(value==1&&Cat==3){
      this.Q31=false;
      this.A31=false;
      this.Counter++;
    }
    if(value==2&&Cat==3){
      this.Q32=false;
      this.A32=false;
      this.Counter++;
    }
    if(value==3&&Cat==3){
      this.Q33=false;
      this.A33=false;
      this.Counter++;
    }
    if(value==4&&Cat==3){
      this.Q34=false;
      this.A34=false;
      this.Counter++;
    }
    if(value==5&&Cat==3){
      this.Q35=false;
      this.A35=false;
      this.Counter++;
    }
    if(value==1&&Cat==4){
      this.Q41=false;
      this.A41=false;
      this.Counter++;
    }
    if(value==2&&Cat==4){
      this.Q42=false;
      this.A42=false;
      this.Counter++;
    }
    if(value==3&&Cat==4){
      this.Q43=false;
      this.A43=false;
      this.Counter++;
    }
    if(value==4&&Cat==4){
      this.Q44=false;
      this.A44=false;
      this.Counter++;
    }
    if(value==5&&Cat==4){
      this.Q45=false;
      this.A45=false;
      this.Counter++;
    }
    if(value==1&&Cat==5){
      this.Q51=false;
      this.A51=false;
      this.Counter++;
    }
    if(value==2&&Cat==5){
      this.Q52=false;
      this.A52=false;
      this.Counter++;
    }
    if(value==3&&Cat==5){
      this.Q53=false;
      this.A53=false;
      this.Counter++;
    }
    if(value==4&&Cat==5){
      this.Q54=false;
      this.A54=false;
      this.Counter++;
    }
    if(value==5&&Cat==5){
      this.Q55=false;
      this.A55=false;
      this.Counter++;
    }
    if (this.Succ){
      this.Score = this.Score+value*100;
    }else{
      this.Score=this.Score-value*100;
    }

        if(this.Sab==1){
        if(this.Counter==5){
          console.log("Game Ended your score is " + this.Score);
        }else{}
        } else if (this.Sab==2){
      
        if(this.Counter==10){
          console.log("Game Ended your score is "+ this.Score);
          
        }else{}}
        else if (this.Sab==3){
        
        if(this.Counter==15){
          console.log("Game Ended your score is " + this.Score);
          
        }else{}}else if (this.Sab==4){
        
        if(this.Counter==20){
          console.log("Game Ended your score is " + this.Score);
          
        }else{}}else if(this.Sab==5){
        
        if(this.Counter==25){
          console.log("Game Ended your score is " + this.Score);
          
        }else{}}

  }
  ChangeFaith(){
    if (this.Succ){
      this.Succ=false;
    }else{
      this.Succ=true;
    }

  }
  ngOnInit(): void {
    //this.StartGame();
    this.Test2();
    
  }

}