import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jeopardyservice } from 'src/app/jeopardyservice';
import { Category } from 'src/app/models/category/category';
import { Clue } from 'src/app/models/clue/clue';
import { CategorySelectorComponent } from '../category-selector/category-selector.component';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  public currentGameId = '';
  public currentSessionId = '';
  public Bob: Array<number>;
  public Sab: number = 5;
  public a: number = 1;
  public b: number = 2;
  public c: number = 3;
  public d: number = 4;
  public e: number = 5;
  public v: number = 1;
  public Gremlin: Boolean = false;
  constructor(
    private Js: jeopardyservice,
    private CS: CategorySelectorComponent,
    private ss: SessionService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.a = params['a'];
      this.b = params['b'];
      this.c = params['c'];
      this.d = params['d'];
      this.e = params['e'];
      this.Sab = params['Sab'];
    });
    this.Bob = [this.a, this.b, this.c, this.d, this.e];
    console.log(this.Bob);
  }
  public A: Array<number> = this.CS.Bob;
  public i: number = 0;
  public value: number = 1;

  public MAN: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C2C1: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C3C1: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C4C1: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C5C1: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C1C2: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C2C2: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C3C2: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C4C2: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C5C2: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C1C3: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C2C3: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C3C3: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C4C3: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C5C3: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C1C4: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C2C4: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C3C4: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C4C4: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C5C4: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C1C5: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C2C5: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C3C5: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C4C5: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C5C5: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public C1C1: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };

  CheckCheck() {
    if (this.Sab >= 1) {
      console.log(this.C1C1.answer);
      console.log(this.C1C2.answer);
      console.log(this.C1C3.answer);
      console.log(this.C1C4.answer);
      console.log(this.C1C5.answer);
    }
    if (this.Sab == 5) {
      console.log(this.C5C1.answer);
      console.log(this.C5C2.answer);
      console.log(this.C5C3.answer);
      console.log(this.C5C4.answer);
      console.log(this.C5C5.answer);
    }
    if (this.Sab >= 2) {
      console.log(this.C2C1.answer);
      console.log(this.C2C2.answer);
      console.log(this.C2C3.answer);
      console.log(this.C2C4.answer);
      console.log(this.C2C5.answer);
    }
    if (this.Sab >= 3) {
      console.log(this.C3C1.answer);
      console.log(this.C3C2.answer);
      console.log(this.C3C3.answer);
      console.log(this.C3C4.answer);
      console.log(this.C3C5.answer);
    }
    if (this.Sab >= 4) {
      console.log(this.C4C1.answer);
      console.log(this.C4C2.answer);
      console.log(this.C4C3.answer);
      console.log(this.C4C4.answer);
      console.log(this.C4C5.answer);
    }
  }

    async Test2() {
    if (this.Sab >= 1) {
      for (this.value; this.value <= 5; this.value = this.value + 1) {
        this.Js.getQuestionFromApi(this.Bob[0], this.value * 100).subscribe(
          (data: any) => {
            this.MAN = data.body[0];
            if (this.C1C1.id == 0) {
              this.C1C1 = this.MAN;
              console.log(this.C1C1);
            } else if (this.C1C2.id == 0) {
              this.C1C2 = this.MAN;
              console.log(this.C1C2);
            } else if (this.C1C3.id == 0) {
              this.C1C3 = this.MAN;
              console.log(this.C1C3);
            } else if (this.C1C4.id == 0) {
              this.C1C4 = this.MAN;
              console.log(this.C1C4);
            } else if (this.C1C5.id == 0) {
              this.C1C5 = this.MAN;
              console.log(this.C1C5);
              this.value = 1;
            }
          },
          () => {
            console.log('it got away');
          }
        );
      }
      this.value = 1;
    }
    if (this.Sab >= 2) {
      for (this.value; this.value <= 5; this.value = this.value + 1) {
        this.Js.getQuestionFromApi(this.Bob[1], this.value * 100).subscribe(
          (data: any) => {
            this.MAN = data.body[0];
            if (this.C2C1.id == 0) {
              this.C2C1 = this.MAN;
              console.log(this.C2C1);
            } else if (this.C2C2.id == 0) {
              this.C2C2 = this.MAN;
              console.log(this.C2C2);
            } else if (this.C2C3.id == 0) {
              this.C2C3 = this.MAN;
              console.log(this.C2C3);
            } else if (this.C2C4.id == 0) {
              this.C2C4 = this.MAN;
              console.log(this.C2C4);
            } else if (this.C2C5.id == 0) {
              this.C2C5 = this.MAN;
              console.log(this.C2C5);
            }
          },
          () => {
            console.log('it got away');
          }
        );
      }
      this.value = 1;
    }
    if (this.Sab >= 3) {
      for (this.value; this.value <= 5; this.value = this.value + 1) {
        this.Js.getQuestionFromApi(this.Bob[2], this.value * 100).subscribe(
          (data: any) => {
            this.MAN = data.body[0];
            if (this.C3C1.id == 0) {
              this.C3C1 = this.MAN;
              console.log(this.C3C1);
            } else if (this.C3C2.id == 0) {
              this.C3C2 = this.MAN;
              console.log(this.C3C2);
            } else if (this.C3C3.id == 0) {
              this.C3C3 = this.MAN;
              console.log(this.C3C3);
            } else if (this.C3C4.id == 0) {
              this.C3C4 = this.MAN;
              console.log(this.C3C4);
            } else if (this.C3C5.id == 0) {
              this.C3C5 = this.MAN;
              console.log(this.C3C5);
            }
          },
          () => {
            console.log('it got away');
          }
        );
      }
      this.value = 1;
    }
    if (this.Sab >= 5) {
      for (this.value; this.value <= 5; this.value = this.value + 1) {
        this.Js.getQuestionFromApi(this.Bob[3], this.value * 100).subscribe(
          (data: any) => {
            this.MAN = data.body[0];
            if (this.C5C1.id == 0) {
              this.C5C1 = this.MAN;
              console.log(this.C5C1);
            } else if (this.C5C2.id == 0) {
              this.C5C2 = this.MAN;
              console.log(this.C5C2);
            } else if (this.C5C3.id == 0) {
              this.C5C3 = this.MAN;
              console.log(this.C5C3);
            } else if (this.C5C4.id == 0) {
              this.C5C4 = this.MAN;
              console.log(this.C5C4);
            } else if (this.C5C5.id == 0) {
              this.C5C5 = this.MAN;
              console.log(this.C5C5);
            }
          },
          () => {
            console.log('it got away');
          }
        );
      }
      this.value = 1;
    }
    if (this.Sab >= 4) {
      for (this.value; this.value <= 5; this.value = this.value + 1) {
        this.Js.getQuestionFromApi(this.Bob[4], this.value * 100).subscribe(
          (data: any) => {
            this.MAN = data.body[0];
            if (this.C4C1.id == 0) {
              this.C4C1 = this.MAN;
              console.log(this.C4C1);
            } else if (this.C4C2.id == 0) {
              this.C4C2 = this.MAN;
              console.log(this.C4C2);
            } else if (this.C4C3.id == 0) {
              this.C4C3 = this.MAN;
              console.log(this.C4C3);
            } else if (this.C4C4.id == 0) {
              this.C4C4 = this.MAN;
              console.log(this.C4C4);
            } else if (this.C4C5.id == 0) {
              this.C4C5 = this.MAN;
              console.log(this.C4C5);
            }
          },
          () => {
            console.log('it got away');
          }
        );
      }
    }}
  public D1: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public D2: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public D3: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public D4: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public D5: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public D6: Clue = {
    id: 0,
    answer: '',
    question: '',
    value: 0,
    category_id: 0,
  };
  public Cat1: Category = {
    id: 0,
    title: '',
    clues_count: 0,
  };
  public Cat2: Category = {
    id: 0,
    title: '',
    clues_count: 0,
  };
  public Cat3: Category = {
    id: 0,
    title: '',
    clues_count: 0,
  };
  public Cat5: Category = {
    id: 0,
    title: '',
    clues_count: 0,
  };
  public Cat4: Category = {
    id: 0,
    title: '',
    clues_count: 0,
  };

  public j: number = 0;
  public Bu2: Boolean = false;
  NameTheCats() {
    this.Gremlin = true;
    if (this.Sab >= 1) {
      this.Js.getCategoryFromApi(this.C1C1.category_id).subscribe(
        (data: any) => {
          this.Cat1 = data.body;
        },
        () => {
          console.log('somethingwentwrong');
        }
      );
    }
    if (this.Sab >= 2) {
      this.Js.getCategoryFromApi(this.C2C1.category_id).subscribe(
        (data: any) => {
          this.Cat2 = data.body;
        },
        () => {
          console.log('somethingwentwrong');
        }
      );
    }
    if (this.Sab >= 3) {
      this.Js.getCategoryFromApi(this.C3C1.category_id).subscribe(
        (data: any) => {
          this.Cat3 = data.body;
        },
        () => {
          console.log('somethingwentwrong');
        }
      );
    }
    if (this.Sab == 5) {
      this.Js.getCategoryFromApi(this.C5C1.category_id).subscribe(
        (data: any) => {
          this.Cat5 = data.body;
        },
        () => {
          console.log('somethingwentwrong');
        }
      );
    }
    if (this.Sab >= 4) {
      this.Js.getCategoryFromApi(this.C4C1.category_id).subscribe(
        (data: any) => {
          this.Cat4 = data.body;
        },
        () => {
          console.log('somethingwentwrong');
        }
      );
    }
    /*if we wanted a Go back button here Should go the Boolean for it to appear.*/
  }
  SortC1() {
    this.D1 = this.C1C1;
    this.D2 = this.C1C2;
    this.D3 = this.C1C3;
    this.D4 = this.C1C4;
    this.D5 = this.C1C5;
    for (this.j = 0; this.j < 10; this.j++) {
      if (this.D1.value < this.D2.value) {
      } else if (this.D1.value > this.D2.value) {
        this.D6 = this.D1;
        this.D1 = this.D2;
        this.D2 = this.D6;
      }
      if (this.D2.value < this.D3.value) {
      } else if (this.D2.value > this.D3.value) {
        this.D6 = this.D2;
        this.D2 = this.D3;
        this.D3 = this.D6;
      }
      if (this.D3.value < this.D4.value) {
      } else if (this.D3.value > this.D4.value) {
        this.D6 = this.D3;
        this.D3 = this.D4;
        this.D4 = this.D6;
      }
      if (this.D4.value < this.D5.value) {
      } else if (this.D4.value > this.D5.value) {
        this.D6 = this.D4;
        this.D4 = this.D5;
        this.D5 = this.D6;
      }
    }
    this.C1C1 = this.D1;
    this.C1C2 = this.D2;
    this.C1C3 = this.D3;
    this.C1C4 = this.D4;
    this.C1C5 = this.D5;
    this.D1 = this.C2C1;
    this.D2 = this.C2C2;
    this.D3 = this.C2C3;
    this.D4 = this.C2C4;
    this.D5 = this.C2C5;
    for (this.j = 0; this.j < 10; this.j++) {
      if (this.D1.value < this.D2.value) {
      } else if (this.D1.value > this.D2.value) {
        this.D6 = this.D1;
        this.D1 = this.D2;
        this.D2 = this.D6;
      }
      if (this.D2.value < this.D3.value) {
      } else if (this.D2.value > this.D3.value) {
        this.D6 = this.D2;
        this.D2 = this.D3;
        this.D3 = this.D6;
      }
      if (this.D3.value < this.D4.value) {
      } else if (this.D3.value > this.D4.value) {
        this.D6 = this.D3;
        this.D3 = this.D4;
        this.D4 = this.D6;
      }
      if (this.D4.value < this.D5.value) {
      } else if (this.D4.value > this.D5.value) {
        this.D6 = this.D4;
        this.D4 = this.D5;
        this.D5 = this.D6;
      }
    }
    this.C2C1 = this.D1;
    this.C2C2 = this.D2;
    this.C2C3 = this.D3;
    this.C2C4 = this.D4;
    this.C2C5 = this.D5;
    this.D1 = this.C3C1;
    this.D2 = this.C3C2;
    this.D3 = this.C3C3;
    this.D4 = this.C3C4;
    this.D5 = this.C3C5;
    for (this.j = 0; this.j < 10; this.j++) {
      if (this.D1.value < this.D2.value) {
      } else if (this.D1.value > this.D2.value) {
        this.D6 = this.D1;
        this.D1 = this.D2;
        this.D2 = this.D6;
      }
      if (this.D2.value < this.D3.value) {
      } else if (this.D2.value > this.D3.value) {
        this.D6 = this.D2;
        this.D2 = this.D3;
        this.D3 = this.D6;
      }
      if (this.D3.value < this.D4.value) {
      } else if (this.D3.value > this.D4.value) {
        this.D6 = this.D3;
        this.D3 = this.D4;
        this.D4 = this.D6;
      }
      if (this.D4.value < this.D5.value) {
      } else if (this.D4.value > this.D5.value) {
        this.D6 = this.D4;
        this.D4 = this.D5;
        this.D5 = this.D6;
      }
    }
    this.C3C1 = this.D1;
    this.C3C2 = this.D2;
    this.C3C3 = this.D3;
    this.C3C4 = this.D4;
    this.C3C5 = this.D5;
    this.D1 = this.C4C1;
    this.D2 = this.C4C2;
    this.D3 = this.C4C3;
    this.D4 = this.C4C4;
    this.D5 = this.C4C5;
    for (this.j = 0; this.j < 10; this.j++) {
      if (this.D1.value < this.D2.value) {
      } else if (this.D1.value > this.D2.value) {
        this.D6 = this.D1;
        this.D1 = this.D2;
        this.D2 = this.D6;
      }
      if (this.D2.value < this.D3.value) {
      } else if (this.D2.value > this.D3.value) {
        this.D6 = this.D2;
        this.D2 = this.D3;
        this.D3 = this.D6;
      }
      if (this.D3.value < this.D4.value) {
      } else if (this.D3.value > this.D4.value) {
        this.D6 = this.D3;
        this.D3 = this.D4;
        this.D4 = this.D6;
      }
      if (this.D4.value < this.D5.value) {
      } else if (this.D4.value > this.D5.value) {
        this.D6 = this.D4;
        this.D4 = this.D5;
        this.D5 = this.D6;
      }
    }
    this.C4C1 = this.D1;
    this.C4C2 = this.D2;
    this.C4C3 = this.D3;
    this.C4C4 = this.D4;
    this.C4C5 = this.D5;
    this.D1 = this.C5C1;
    this.D2 = this.C5C2;
    this.D3 = this.C5C3;
    this.D4 = this.C5C4;
    this.D5 = this.C5C5;
    for (this.j = 0; this.j < 10; this.j++) {
      if (this.D1.value < this.D2.value) {
      } else if (this.D1.value > this.D2.value) {
        this.D6 = this.D1;
        this.D1 = this.D2;
        this.D2 = this.D6;
      }
      if (this.D2.value < this.D3.value) {
      } else if (this.D2.value > this.D3.value) {
        this.D6 = this.D2;
        this.D2 = this.D3;
        this.D3 = this.D6;
      }
      if (this.D3.value < this.D4.value) {
      } else if (this.D3.value > this.D4.value) {
        this.D6 = this.D3;
        this.D3 = this.D4;
        this.D4 = this.D6;
      }
      if (this.D4.value < this.D5.value) {
      } else if (this.D4.value > this.D5.value) {
        this.D6 = this.D4;
        this.D4 = this.D5;
        this.D5 = this.D6;
      }
    }
    this.C5C1 = this.D1;
    this.C5C2 = this.D2;
    this.C5C3 = this.D3;
    this.C5C4 = this.D4;
    this.C5C5 = this.D5;

    this.Bu2 = true;
  }


  public Q11: Boolean = false;
  public Q12: Boolean = false;
  public Q13: Boolean = false;
  public Q14: Boolean = false;
  public Q15: Boolean = false;
  public Q21: Boolean = false;
  public Q22: Boolean = false;
  public Q23: Boolean = false;
  public Q24: Boolean = false;
  public Q25: Boolean = false;
  public Q31: Boolean = false;
  public Q32: Boolean = false;
  public Q33: Boolean = false;
  public Q34: Boolean = false;
  public Q35: Boolean = false;
  public Q41: Boolean = false;
  public Q42: Boolean = false;
  public Q43: Boolean = false;
  public Q44: Boolean = false;
  public Q45: Boolean = false;
  public Q51: Boolean = false;
  public Q52: Boolean = false;
  public Q53: Boolean = false;
  public Q54: Boolean = false;
  public Q55: Boolean = false;
  attemptTimeProgress: number = 100;
  timeInterval: any;
  timeSeconds: number = 15;
  progressClass = 'bg-success';
  QuestionButton(value: number, Cat: number) {
    this.playAudio();
    this.progressClass='bg-success';
    if (value == 1 && Cat == 1) {
      this.Q11 = true;
      this.N11 = true;
    }
    if (value == 2 && Cat == 1) {
      this.Q12 = true;
      this.N12 = true;
    }
    if (value == 3 && Cat == 1) {
      this.Q13 = true;
      this.N13 = true;
    }
    if (value == 4 && Cat == 1) {
      this.Q14 = true;
      this.N14 = true;
    }
    if (value == 5 && Cat == 1) {
      this.Q15 = true;
      this.N15 = true;
    }
    if (value == 1 && Cat == 2) {
      this.Q21 = true;
      this.N21 = true;
    }
    if (value == 2 && Cat == 2) {
      this.Q22 = true;
      this.N22 = true;
    }
    if (value == 3 && Cat == 2) {
      this.Q23 = true;
      this.N23 = true;
    }
    if (value == 4 && Cat == 2) {
      this.Q24 = true;
      this.N24 = true;
    }
    if (value == 5 && Cat == 2) {
      this.Q25 = true;
      this.N25 = true;
    }
    if (value == 1 && Cat == 3) {
      this.Q31 = true;
      this.N31 = true;
    }
    if (value == 2 && Cat == 3) {
      this.Q32 = true;
      this.N32 = true;
    }
    if (value == 3 && Cat == 3) {
      this.Q33 = true;
      this.N33 = true;
    }
    if (value == 4 && Cat == 3) {
      this.Q34 = true;
      this.N34 = true;
    }
    if (value == 5 && Cat == 3) {
      this.Q35 = true;
      this.N35 = true;
    }
    if (value == 1 && Cat == 4) {
      this.Q41 = true;
      this.N41 = true;
    }
    if (value == 2 && Cat == 4) {
      this.Q42 = true;
      this.N42 = true;
    }
    if (value == 3 && Cat == 4) {
      this.Q43 = true;
      this.N43 = true;
    }
    if (value == 4 && Cat == 4) {
      this.Q44 = true;
      this.N44 = true;
    }
    if (value == 5 && Cat == 4) {
      this.Q45 = true;
      this.N45 = true;
    }
    if (value == 1 && Cat == 5) {
      this.Q51 = true;
      this.N51 = true;
    }
    if (value == 2 && Cat == 5) {
      this.Q52 = true;
      this.N52 = true;
    }
    if (value == 3 && Cat == 5) {
      this.Q53 = true;
      this.N53 = true;
    }
    if (value == 4 && Cat == 5) {
      this.Q54 = true;
      this.N54 = true;
    }
    if (value == 5 && Cat == 5) {
      this.Q55 = true;
      this.N55 = true;
    }
    this.attemptTimeProgress = 100;
    this.timeSeconds = 30;
    this.timeInterval = setInterval(() => {
      this.attemptTimeProgress =
        this.attemptTimeProgress - 10 < 0
          ? 0
          : this.attemptTimeProgress - 3.33;
      this.timeSeconds--;
      if (this.timeSeconds == 15) {
        this.progressClass = 'bg-warning';
      }
      if (this.timeSeconds == 7) {
        this.progressClass = 'bg-danger';
      }
      if (this.timeSeconds == 0) {

        this.Buttoon(value,Cat);

        this.endCheck();

      }
    }, 1000);
  }

  public N11: Boolean = false;
  public N12: Boolean = false;
  public N13: Boolean = false;
  public N14: Boolean = false;
  public N15: Boolean = false;
  public N21: Boolean = false;
  public N22: Boolean = false;
  public N23: Boolean = false;
  public N24: Boolean = false;
  public N25: Boolean = false;
  public N31: Boolean = false;
  public N32: Boolean = false;
  public N33: Boolean = false;
  public N34: Boolean = false;
  public N35: Boolean = false;
  public N41: Boolean = false;
  public N42: Boolean = false;
  public N43: Boolean = false;
  public N44: Boolean = false;
  public N45: Boolean = false;
  public N51: Boolean = false;
  public N52: Boolean = false;
  public N53: Boolean = false;
  public N54: Boolean = false;
  public N55: Boolean = false;

  public A11: Boolean = false;
  public A12: Boolean = false;
  public A13: Boolean = false;
  public A14: Boolean = false;
  public A15: Boolean = false;
  public A21: Boolean = false;
  public A22: Boolean = false;
  public A23: Boolean = false;
  public A24: Boolean = false;
  public A25: Boolean = false;
  public A31: Boolean = false;
  public A32: Boolean = false;
  public A33: Boolean = false;
  public A34: Boolean = false;
  public A35: Boolean = false;
  public A41: Boolean = false;
  public A42: Boolean = false;
  public A43: Boolean = false;
  public A44: Boolean = false;
  public A45: Boolean = false;
  public A51: Boolean = false;
  public A52: Boolean = false;
  public A53: Boolean = false;
  public A54: Boolean = false;
  public A55: Boolean = false;
  public Answer: String = '';
  public CeCe: String = '';
  Buttoon(value: number, Cat: number) {
    this.stopAudio();
    clearInterval(this.timeInterval);
    if (value == 1 && Cat == 1) {
      this.Q11 = false;
      this.A11 = true;
      this.Counter++;
      if (this.Answer == this.C1C1.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 2 && Cat == 1) {
      this.Q12 = false;
      this.A12 = true;
      this.Counter++;
      if (this.Answer == this.C1C2.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 3 && Cat == 1) {
      this.Q13 = false;
      this.A13 = true;
      this.Counter++;
      if (this.Answer == this.C1C3.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 4 && Cat == 1) {
      this.Q14 = false;
      this.A14 = true;
      this.Counter++;
      if (this.Answer == this.C1C4.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="NO"
      }
    }
    if (value == 5 && Cat == 1) {
      this.Q15 = false;
      this.A15 = true;
      this.Counter++;
      if (this.Answer == this.C1C5.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 1 && Cat == 2) {
      this.Q21 = false;
      this.A21 = true;
      this.Counter++;
      if (this.Answer == this.C2C1.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 2 && Cat == 2) {
      this.Q22 = false;
      this.A22 = true;
      this.Counter++;
      if (this.Answer == this.C2C2.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 3 && Cat == 2) {
      this.Q23 = false;
      this.A23 = true;
      this.Counter++;
      if (this.Answer == this.C2C3.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 4 && Cat == 2) {
      this.Q24 = false;
      this.A24 = true;
      this.Counter++;
      if (this.Answer == this.C2C4.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 5 && Cat == 2) {
      this.Q25 = false;
      this.A25 = true;
      this.Counter++;
      if (this.Answer == this.C2C5.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 1 && Cat == 3) {
      this.Q31 = false;
      this.A31 = true;
      this.Counter++;
      if (this.Answer == this.C3C1.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 2 && Cat == 3) {
      this.Q32 = false;
      this.A32 = true;
      this.Counter++;
      if (this.Answer == this.C3C2.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 3 && Cat == 3) {
      this.Q33 = false;
      this.A33 = true;
      this.Counter++;
      if (this.Answer == this.C3C3.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 4 && Cat == 3) {
      this.Q34 = false;
      this.A34 = true;
      this.Counter++;
      if (this.Answer == this.C3C4.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 5 && Cat == 3) {
      this.Q35 = false;
      this.A35 = true;
      this.Counter++;
      if (this.Answer == this.C3C5.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 1 && Cat == 4) {
      this.Q41 = false;
      this.A41 = true;
      this.Counter++;
      if (this.Answer == this.C4C1.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 2 && Cat == 4) {
      this.Q42 = false;
      this.A42 = true;
      this.Counter++;
      if (this.Answer == this.C4C2.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 3 && Cat == 4) {
      this.Q43 = false;
      this.A43 = true;
      this.Counter++;
      if (this.Answer == this.C4C3.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 4 && Cat == 4) {
      this.Q44 = false;
      this.A44 = true;
      this.Counter++;
      if (this.Answer == this.C4C4.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 5 && Cat == 4) {
      this.Q45 = false;
      this.A45 = true;
      this.Counter++;
      if (this.Answer == this.C4C5.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 1 && Cat == 5) {
      this.Q51 = false;
      this.A51 = true;
      this.Counter++;
      if (this.Answer == this.C5C1.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Bad is You"
      }
    }
    if (value == 2 && Cat == 5) {
      this.Q52 = false;
      this.A52 = true;
      this.Counter++;
      if (this.Answer == this.C5C2.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 3 && Cat == 5) {
      this.Q53 = false;
      this.A53 = true;
      this.Counter++;
      if (this.Answer == this.C5C3.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 4 && Cat == 5) {
      this.Q54 = false;
      this.A54 = true;
      this.Counter++;
      if (this.Answer == this.C5C4.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Incorrect"
      }
    }
    if (value == 5 && Cat == 5) {
      this.Q55 = false;
      this.A55 = true;
      this.Counter++;
      if (this.Answer == this.C5C5.answer) {
        console.log('correct');
        this.Score = this.Score + value * 100;
        this.Answer="Correct"
      } else {
        this.Score = this.Score - value * 100;
        this.Answer="Not close :)"
      }
    }
    this.timeSeconds=1000;
  }
  endCheck(){
    if (this.Sab == 1) {
      if (this.Counter == 5) {
        console.log('Game Ended your score is ' + this.Score);
        this.hideGame = true;
        this.hideGameOver = false;
        this.gameEnd();

      } else {
      }
    } else if (this.Sab == 2) {
      if (this.Counter == 10) {
        console.log('Game Ended your score is ' + this.Score);
        this.gameEnd();
        this.hideGame = true;
        this.hideGameOver = false;
      } else {
      }
    } else if (this.Sab == 3) {
      if (this.Counter == 15) {
        console.log('Game Ended your score is ' + this.Score);
        this.gameEnd();
        this.hideGame = true;
        this.hideGameOver = false;
      } else {
      }
    } else if (this.Sab == 4) {
      if (this.Counter == 20) {
        console.log('Game Ended your score is ' + this.Score);
        this.gameEnd();
        this.hideGame = true;
        this.hideGameOver = false;
      } else {
      }
    } else if (this.Sab == 5) {
      if (this.Counter == 25) {
        console.log('Game Ended your score is ' + this.Score);
        this.hideGame = true;
        this.hideGameOver = false;
        this.gameEnd();

      }
    }

  }
  public H11: Boolean = false;
  public H12: Boolean = false;
  public H13: Boolean = false;
  public H14: Boolean = false;
  public H15: Boolean = false;
  public H21: Boolean = false;
  public H22: Boolean = false;
  public H23: Boolean = false;
  public H24: Boolean = false;
  public H25: Boolean = false;
  public H31: Boolean = false;
  public H32: Boolean = false;
  public H33: Boolean = false;
  public H34: Boolean = false;
  public H35: Boolean = false;
  public H41: Boolean = false;
  public H42: Boolean = false;
  public H43: Boolean = false;
  public H44: Boolean = false;
  public H45: Boolean = false;
  public H51: Boolean = false;
  public H52: Boolean = false;
  public H53: Boolean = false;
  public H54: Boolean = false;
  public H55: Boolean = false;
  public Succ: boolean = false;
  public Score: number = 0;
  public Counter: number = 0;
  public hideGame : boolean = false;
  public hideGameOver : boolean = true;
  AnswerCleanUp(value: number, Cat: number) {
    if (value == 1 && Cat == 1) {
      this.Q11 = false;
      this.A11 = false;
    }
    if (value == 2 && Cat == 1) {
      this.Q12 = false;
      this.A12 = false;
    }
    if (value == 3 && Cat == 1) {
      this.Q13 = false;
      this.A13 = false;
    }
    if (value == 4 && Cat == 1) {
      this.Q14 = false;
      this.A14 = false;
    }
    if (value == 5 && Cat == 1) {
      this.Q15 = false;
      this.A15 = false;
    }
    if (value == 1 && Cat == 2) {
      this.Q21 = false;
      this.A21 = false;
    }
    if (value == 2 && Cat == 2) {
      this.Q22 = false;
      this.A22 = false;
    }
    if (value == 3 && Cat == 2) {
      this.Q23 = false;
      this.A23 = false;
    }
    if (value == 4 && Cat == 2) {
      this.Q24 = false;
      this.A24 = false;
    }
    if (value == 5 && Cat == 2) {
      this.Q25 = false;
      this.A25 = false;
    }
    if (value == 1 && Cat == 3) {
      this.Q31 = false;
      this.A31 = false;
    }
    if (value == 2 && Cat == 3) {
      this.Q32 = false;
      this.A32 = false;
    }
    if (value == 3 && Cat == 3) {
      this.Q33 = false;
      this.A33 = false;
    }
    if (value == 4 && Cat == 3) {
      this.Q34 = false;
      this.A34 = false;
    }
    if (value == 5 && Cat == 3) {
      this.Q35 = false;
      this.A35 = false;
    }
    if (value == 1 && Cat == 4) {
      this.Q41 = false;
      this.A41 = false;
    }
    if (value == 2 && Cat == 4) {
      this.Q42 = false;
      this.A42 = false;
    }
    if (value == 3 && Cat == 4) {
      this.Q43 = false;
      this.A43 = false;
    }
    if (value == 4 && Cat == 4) {
      this.Q44 = false;
      this.A44 = false;
    }
    if (value == 5 && Cat == 4) {
      this.Q45 = false;
      this.A45 = false;
    }
    if (value == 1 && Cat == 5) {
      this.Q51 = false;
      this.A51 = false;
    }
    if (value == 2 && Cat == 5) {
      this.Q52 = false;
      this.A52 = false;
    }
    if (value == 3 && Cat == 5) {
      this.Q53 = false;
      this.A53 = false;
    }
    if (value == 4 && Cat == 5) {
      this.Q54 = false;
      this.A54 = false;
    }
    if (value == 5 && Cat == 5) {
      this.Q55 = false;
      this.A55 = false;
    }

    if (this.Sab == 1) {
      if (this.Counter == 5) {
        console.log('Game Ended your score is ' + this.Score);
        this.hideGame = true;
        this.hideGameOver = false;
        this.gameEnd();

      } else {
      }
    } else if (this.Sab == 2) {
      if (this.Counter == 10) {
        console.log('Game Ended your score is ' + this.Score);
        this.gameEnd();
        this.hideGame = true;
        this.hideGameOver = false;
      } else {
      }
    } else if (this.Sab == 3) {
      if (this.Counter == 15) {
        console.log('Game Ended your score is ' + this.Score);
        this.gameEnd();
        this.hideGame = true;
        this.hideGameOver = false;
      } else {
      }
    } else if (this.Sab == 4) {
      if (this.Counter == 20) {
        console.log('Game Ended your score is ' + this.Score);
        this.gameEnd();
        this.hideGame = true;
        this.hideGameOver = false;
      } else {
      }
    } else if (this.Sab == 5) {
      if (this.Counter == 25) {
        console.log('Game Ended your score is ' + this.Score);
        this.hideGame = true;
        this.hideGameOver = false;
        this.gameEnd();

      } else {
      }
    }

  }
  audio = new Audio();
  playAudio(){
    this.audio.load();
    this.audio.play();
  }

  stopAudio() {
    this.audio.pause();
  }
  ngOnInit(): void {
    //UNCOMMENT THIS IF YOU WANT TO TEST THE DATABASE FUNCTIONALITY ON GAME START!!!!!!!!
    this.Test2();


    this.audio.src = "../../../assets/audio/roundabout.mp3";
  }
  playerData: any = {};
  imagePreviewUrl: string = '/assets/img/sableyeunknown.png';

  paramsCategory = {
    minC: 1,
    maxC: 100,
    countC: 5,
    index: 0,
  };

  // Sending requests to database on gamestart and gameend
  gameStart() {
   if (!this.isObjEmpty(this.playerData)) {
      // on game start make new game record THEN make new session record
      this.ss.addGame().subscribe({
        next: (data) => {
          this.currentGameId = data.statusObject.gameId;
          let sessionDTO = {
            sessionWinnings: 0,
            sessionWinner: false,
            sessionPlayerfk: this.playerData.playerId,
            sessionGamefk: this.currentGameId,
          };
          console.log(
            '%c[Game created, ID is ' + this.currentGameId + ']',
            'color: blue'
          );
          console.log(data);
          this.ss.addSession(sessionDTO).subscribe({
            next: (data2) => {
              this.currentSessionId = data2.statusObject.sessionId;
              console.log(
                '%c[Session created, ID is ' + this.currentSessionId + ']',
                'color: blue'
              );
              console.log(data2);

            },
          });
        },
      });
    } else {
      console.log(
        '%c[Not creating any game record since user is a guest]',
        'color: orange'
      );
    }
  }
isObjEmpty(obj: any) {
    return Object.keys(obj).length === 0;
  }
  gameEnd() {
     if (!this.isObjEmpty(this.playerData)) {
      // on game end update session record
      // if score is 0 don't update database
      if (this.Score === 0) {
        return;
      }
      let sessionDTO = {
        sessionWinnings: this.Score,
        sessionWinner: true, // SESSION WINNER IS ALWAYS TRUE SINCE THERE IS ONLY ONE PLAYER!!!!!!
        sessionPlayerfk: this.playerData.playerId,
        sessionGamefk: this.currentGameId,
      };
      this.ss.updateSession(sessionDTO, this.currentSessionId).subscribe({
        next: (data) => {
          console.log('Updated game session results.', 'color: blue');
          console.log(data);
        },
      });
    }
  }

  // Testing only

  // Pass data from child (commons component) to parent (single-player-game component)
  getPlayerData(value: any) {
    this.playerData = value;
    this.imagePreviewUrl =
      'https://revaturejeopardyproject.space:8443/api/players/avatar/' + this.playerData?.playerId;
    console.log(this.playerData);
    this.gameStart();
  }
}
