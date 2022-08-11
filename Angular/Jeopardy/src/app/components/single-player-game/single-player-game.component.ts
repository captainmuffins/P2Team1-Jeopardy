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

  ngOnInit(): void {}

  categoryData: any = {};

  // Testing only
  sampleCategories: any = [1, 2, 3, 4, 5];
  sampleClues: any = [100, 200, 300, 400, 500];
  gameDataLoadingProgress: number = 0;

  // Pass data from child (commons component) to parent (single-player-game component)
  getPlayerData(value: any) {
    this.playerData = value;
    this.imagePreviewUrl =
      'http://localhost:8080/api/players/avatar/' + this.playerData?.playerId;
    console.log(this.playerData);
  }

  loadGameData() {

    let paramsCategory = {
      minCat: 1,
      maxCat: 100,
      countCat: 5,
      countClues: 5,
      catLoadIdx: 0,
      clueLoadIdx: 0
    };



  }
}
