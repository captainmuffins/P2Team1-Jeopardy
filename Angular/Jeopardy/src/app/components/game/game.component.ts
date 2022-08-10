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
  async StartGame(){
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
          } }
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
  NameTheCats(){
    
    if(this.Sab>=1){this.Js.getCategoryFromApi(this.C1C1.category_id).subscribe((data:any)=>{this.Cat1=data.body},()=>{console.log("somethingwentwrong")});}
    if(this.Sab>=2){this.Js.getCategoryFromApi(this.C2C1.category_id).subscribe((data:any)=>{this.Cat2=data.body},()=>{console.log("somethingwentwrong")});}
    if(this.Sab>=3){this.Js.getCategoryFromApi(this.C3C1.category_id).subscribe((data:any)=>{this.Cat3=data.body},()=>{console.log("somethingwentwrong")});}
    if(this.Sab==5){this.Js.getCategoryFromApi(this.C5C1.category_id).subscribe((data:any)=>{this.Cat5=data.body},()=>{console.log("somethingwentwrong")});}
    if(this.Sab>=4){this.Js.getCategoryFromApi(this.C4C1.category_id).subscribe((data:any)=>{this.Cat4=data.body},()=>{console.log("somethingwentwrong")});}
  }
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
  

  
  ngOnInit(): void {
    //this.StartGame();
    this.Test2();
    
  }

}