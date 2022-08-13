import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JeopardyService } from 'src/app/services/jeopardy/jeopardy.service';

@Component({
  selector: 'app-single-player-game',
  templateUrl: './single-player-game.component.html',
  styleUrls: ['./single-player-game.component.css'],
})
export class SinglePlayerGameComponent implements OnInit {
  constructor(private _jeopardyService: JeopardyService) {
    this.JSON = JSON;
  }
  JSON: any = {};
  bootstrap: any = {};
  playerData: any = {};
  imagePreviewUrl: string = '/assets/img/sableyeunknown.png';

  categoryData: any = {};

  // Testing only
  // sampleCategories: any = [1, 2, 3, 4, 5];
  clueValuesSearch: Array<number> = [100, 200, 300, 400, 500];
  gameDataLoadingProgress: number = 0;

  // Store retrieved categories and clues
  jCategories: Array<any> = [];
  jCluesOffset: Array<number> = [];
  jClues: Array<any> = [];

  catLoadIdx = 0;

  selectedCat: string = '5';
  hideGameOptions: boolean = false;
  hideGameLoading: boolean = true;
  hideGame: boolean = true;

  gameScore: number = 0;

  maxProgress: number = 0;
  idxProgress: number = 1;
  curProgress: number = 0;

  ngOnInit(): void {
    // test 5 categories
    // this.retrieveGameData(5);
  }

  attemptClues(catNum: number, clueNum: number) {}

  buildCluesArray(cluesArr: Array<any>): Array<any> {
    let clueSetPush: Array<any> = [];

    for (let i = 0; i < this.clueValuesSearch.length; i++) {
      let ele = this.clueValuesSearch[i];
      let filteredClue = cluesArr.filter(function (el) {
        return el.value === ele;
      });

      let randIdx = Math.floor(Math.random() * (filteredClue.length - 1));
      this.idxProgress++;
      this.curProgress = (this.idxProgress / this.maxProgress) * 100;
      console.log(this.curProgress);
      clueSetPush.push(filteredClue[randIdx]);
    }

    return clueSetPush;
  }

  getCluesPerCategory() {
    for (let i = 0; i < this.jCategories.length; i++) {
      const curCat = this.jCategories[i];
      const randClues = this.buildCluesArray(curCat.clues);
      this.jClues.push(randClues);
    }

    console.log('%c[Array of categories]', 'color: magenta');
    console.log(this.jCategories);
    console.log('%c[Array of clues per category]', 'color: magenta');
    console.log(this.jClues);
    setTimeout(() => {
      this.hideGameLoading = true;
      this.hideGame = false;
    }, 1000);
  }

  // Pass data from child (commons component) to parent (single-player-game component)
  getPlayerData(value: any) {
    this.playerData = value;
    this.imagePreviewUrl =
      'http://localhost:8080/api/players/avatar/' + this.playerData?.playerId;
    // console.log(this.playerData);
  }

  randomCluesOffset(numClues: number): number {
    let curMax = Math.floor(numClues / 5) * 5;
    let factorsArray: Array<number> = [];
    for (let i = 0; i <= curMax; i++) {
      if (i % 5 == 0) {
        factorsArray.push(i);
      }
    }
    let rndInt = Math.floor(Math.random() * (factorsArray.length - 1));
    return factorsArray[rndInt];
  }

  randomCatId(): number {
    let generateNumber: boolean = true;
    let rndInt: number = 0;
    while (generateNumber) {
      rndInt = Math.floor(Math.random() * 100 + 1);
      if (this.jCategories.filter((e) => e.id === rndInt).length > 0) {
        continue;
      } else {
        generateNumber = false;
      }
    }
    return rndInt;
  }

  doLoad() {
    this.hideGameOptions = true;
    this.hideGameLoading = false;

    const numCat = parseInt(this.selectedCat);

    console.log(numCat);
    this.maxProgress = numCat * 5 + numCat;
    console.log(this.maxProgress);
    this.retrieveGameData(numCat);
  }

  retrieveGameData(numCat: number) {
    // console.log('[numCat = ' + numCat + ' ]')

    let catId = this.randomCatId();

    this._jeopardyService.getCategory(catId).subscribe({
      next: (data) => {
        // console.log(data);
        if (data.clues_count > 9) {
          console.log('%c[Pushed category data to array]', 'color: green');
          this.jCategories.push(data);

          this.catLoadIdx++;
          if (this.catLoadIdx < numCat) {
            this.idxProgress++;
            this.curProgress = (this.idxProgress / this.maxProgress) * 100;
            console.log(this.curProgress);
            this.retrieveGameData(numCat);
          } else {
            console.log(
              '%c[Retrieved ' + numCat + ' categories. Starting the game]',
              'color: blue'
            );
            this.getCluesPerCategory();
          }
        } else {
          console.log(
            '%c[Category has less than 10 clues. Retrieving another random one.]',
            'color: orange'
          );
          this.retrieveGameData(numCat);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
