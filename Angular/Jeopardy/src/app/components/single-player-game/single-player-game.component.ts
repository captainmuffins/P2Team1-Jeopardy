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
  playerData: any = {};
  imagePreviewUrl: string = '/assets/img/sableyeunknown.png';

  categoryData: any = {};

  // Testing only
  // sampleCategories: any = [1, 2, 3, 4, 5];
  //sampleClues: any = [100, 200, 300, 400, 500];
  gameDataLoadingProgress: number = 0;

  // Store retrieved categories and clues
  jCategories: Array<any> = [];
  jCluesOffset: Array<number> = [];
  jClues: Array<any> = [];

  paramsCategory: any = {
    minCat: 1,
    maxCat: 100,
    countCat: 5,
    countClues: 5,
    catLoadIdx: 0,
    clueLoadIdx: 0,
  };

  ngOnInit(): void {
    // test 5 categories
    this.retrieveGameData(5);
    // this.getFactors();
  }

  getCluesPerCategory() {
    // Get Clues
    for (let x = 0; x < this.jCluesOffset.length; x++) {
      let curOffset = this.jCluesOffset[x];
      let curCat = this.jCategories[x];
      let cluesPerCat: any = [];
      for (let y = curOffset; y < curOffset + 5; y++) {
        cluesPerCat.push(curCat.clues[y]);
      }
      this.jClues.push(cluesPerCat);
    }
    console.log('%c[Array of categories]', 'color: magenta');
    console.log(this.jCategories);
    console.log('%c[Array of clues offset]', 'color: magenta');
    console.log(this.jCluesOffset);
    console.log('%c[Array of clues per category]', 'color: magenta');
    console.log(this.jClues);
  }

  getFactors() {
    let max = 2000;

    for (let i = 0; i <= max; i++) {
      if (i % 5 == 0) {
        console.log(i);
      }
    }
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

  retrieveGameData(numCat: number) {
    // console.log('[numCat = ' + numCat + ' ]')
    let catId = this.randomCatId();

    this._jeopardyService.getCategory(catId).subscribe({
      next: (data) => {
        // console.log(data);
        if (data.clues_count >= 5) {
          console.log('%c[Pushed category data to array]', 'color: green');
          this.jCategories.push(data);
          if (data.clues_count === 5) {
            this.jCluesOffset.push(0);
          } else {
            this.jCluesOffset.push(this.randomCluesOffset(data.clues_count));
          }
          this.paramsCategory.catLoadIdx++;
          if (this.paramsCategory.catLoadIdx < numCat) {
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
            '%c[Category has less than 5 clues. Retrieving another random one.]',
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
