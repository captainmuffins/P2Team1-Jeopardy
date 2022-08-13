import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { JeopardyService } from 'src/app/services/jeopardy/jeopardy.service';

@Component({
  selector: 'app-single-player-game',
  templateUrl: './single-player-game.component.html',
  styleUrls: ['./single-player-game.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SinglePlayerGameComponent implements OnInit {
  constructor(private _jeopardyService: JeopardyService) {
    this.JSON = JSON;
  }
  JSON: any = {};
  bootstrap: any = {};
  playerData: any = {};
  imagePreviewUrl: string = '/assets/img/default_avatar_alt.png';

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

  selectedCat: string = '1';
  hideGameOptions: boolean = false;
  hideGameLoading: boolean = true;
  hideGame: boolean = true;
  hideGameOver: boolean = true;

  gameScore: number = 0;

  maxProgress: number = 0;
  idxProgress: number = 1;
  curProgress: number = 0;

  attemptData: any = {
    maxClues: 0,
    curClue: null,
    userAnswer: '',
    numOfAttempts: 0,
    success: false,
    fail: false,
    disableSubmit: false,
  };

  audio = new Audio();

  ngOnInit(): void {
    // Pre-load audio
    this.audio.src = "../../../assets/audio/roundabout.mp3";
  }

  playAudio(){
    this.audio.load();
    this.audio.play();
  }

  stopAudio() {
    this.audio.pause();
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  attemptClues(catNum: number, clueNum: number) {
    this.playAudio();
    const elem = document.getElementById(
      'catClues-' + catNum + '-' + clueNum
    ) as HTMLElement;
    this.attemptData.disableSubmit = false;
    this.attemptData.success = false;
    this.attemptData.fail = false;
    this.attemptData.userAnswer = '';
    elem.style.visibility = 'hidden';
    this.attemptData.curClue = this.jClues[catNum][clueNum];
  }

  submitAnswer() {
    this.stopAudio();
    const clueAns = this.attemptData.curClue?.answer as String;
    const cleanClueAns = clueAns.replace(/[^\w\s\'\-]/g, '');
    console.log(cleanClueAns);
    const answer = this.attemptData.userAnswer as String;
    const value = this.attemptData.curClue?.value as number;
    this.attemptData.disableSubmit = true;
    if (cleanClueAns.toLowerCase() === answer.toLowerCase()) {
      console.log('%c[correct]', 'color: green');
      this.gameScore += value;
      this.attemptData.success = true;
    } else {
      console.log('%c[wrong answer]', 'color: red');
      this.gameScore = this.gameScore - value < 0 ? 0 : this.gameScore - value;
      this.attemptData.fail = true;
    }
    this.attemptData.numOfAttempts++;
    setTimeout(() => {
      document.getElementById('closeOffcanvasClues')?.click();

      // Game stops when all clues have been attempted
      if (this.attemptData.maxClues == this.attemptData.numOfAttempts) {
        setTimeout(() => {
          this.hideGame = true;
          this.hideGameOver = false;
        }, 1000);
      }
    }, 2000);
  }

  retireEarly() {
    this.hideGame = true;
    this.hideGameOver = false;
  }

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
      clueSetPush.push(filteredClue[randIdx]);
    }

    return clueSetPush;
  }

  getCluesPerCategory() {
    for (let i = 0; i < this.jCategories.length; i++) {
      const curCat = this.jCategories[i];
      let randClues = this.buildCluesArray(curCat.clues);
      while(randClues.length < 5) {
        randClues = this.buildCluesArray(curCat.clues);
      }
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
      rndInt = Math.floor(Math.random() * 200 + 1);
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

    this.maxProgress = numCat * 5 + numCat;
    this.attemptData.maxClues = numCat * 5;

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
        console.log(
          '%c[Error retrieving category. Reattempting...]',
          'color: red'
        );
        this.retrieveGameData(numCat);
      },
    });
  }
}
