import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JeopardyService } from 'src/app/services/jeopardy/jeopardy.service';

@Component({
  selector: 'app-single-player-game',
  templateUrl: './single-player-game.component.html',
  styleUrls: ['./single-player-game.component.css'],
})
export class SinglePlayerGameComponent implements OnInit {
  constructor(private _jeopardyService: JeopardyService) {}

  playerData: any = {};
  imagePreviewUrl: string = '/assets/img/sableyeunknown.png';

  ngOnInit(): void {
    // test 5 categories
    this.loadGameData(5);
  }

  categoryData: any = {};

  // Testing only
  sampleCategories: any = [1, 2, 3, 4, 5];
  sampleClues: any = [100, 200, 300, 400, 500];
  gameDataLoadingProgress: number = 0;

  // Store retrieved categories and clues
  jCategories: Array<any> = [];
  jCluesOffset: Array<number> = [];

  paramsCategory: any = {
    minCat: 1,
    maxCat: 100,
    countCat: 5,
    countClues: 5,
    catLoadIdx: 0,
    clueLoadIdx: 0,
  };

  // Pass data from child (commons component) to parent (single-player-game component)
  getPlayerData(value: any) {
    this.playerData = value;
    this.imagePreviewUrl =
      'http://localhost:8080/api/players/avatar/' + this.playerData?.playerId;
    // console.log(this.playerData);
  }

  randomCluesOffset(numClues: number): number {
    let curMax = Math.floor(numClues / 5) * 5;
    let rndInt = Math.floor(Math.random() * curMax) + 1;
    return rndInt;
  }

  randomCatId(): number {
    let generateNumber: boolean = true;
    let rndInt: number = 0;
    while (generateNumber) {
      rndInt = Math.floor(Math.random() * (100 + 1));
      if (this.jCategories.filter((e) => e.id === rndInt).length > 0) {
        continue;
      } else {
        generateNumber = false;
      }
    }
    return rndInt;
  }

  loadGameData(numCat: number) {
    // console.log('[numCat = ' + numCat + ' ]')
    let catId = this.randomCatId();

    this._jeopardyService.getCategory(catId).subscribe({
      next: (data) => {
        // console.log(data);
        if (data.clues_count >= 5) {
          console.log('%c[Pushed category data to array]', 'color: green');
          this.jCategories.push(data);
          if (data.clues_count === 5) {
            this.jCluesOffset.push(1);
          } else {
            this.jCluesOffset.push(this.randomCluesOffset(data.clues_count));
          }
          this.paramsCategory.catLoadIdx++;
          if (this.paramsCategory.catLoadIdx < numCat) {
            this.loadGameData(numCat);
          } else {
            console.log(
              '%c[Retrieved ' + numCat + ' categories. Starting the game]',
              'color: blue'
            );
            console.log(this.jCategories);
            console.log(this.jCluesOffset);
          }
        } else {
          console.log(
            '%c[Category has less than 5 clues. Retrieving another random one.]',
            'color: orange'
          );
          this.loadGameData(numCat);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
