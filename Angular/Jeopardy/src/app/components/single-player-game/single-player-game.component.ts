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

  paramsCategory = {
    minC: 1,
    maxC: 100,
    countC: 5,
    index: 0,
  };

  // Testing only
  sampleCategories = [1, 2, 3, 4, 5];
  sampleClues = [100, 200, 300, 400, 500];

  // Pass data from child (commons component) to parent (single-player-game component)
  getPlayerData(value: any) {
    this.playerData = value;
    this.imagePreviewUrl =
      'http://localhost:8080/api/players/avatar/' + this.playerData?.playerId;
    console.log(this.playerData);
  }
}
