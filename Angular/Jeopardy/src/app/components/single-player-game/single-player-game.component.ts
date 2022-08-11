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
  imagePreviewUrl: string = '/assets/img/default_avatar_alt.png';

  ngOnInit(): void {}

  categoryData: any = {};

  paramsCategory = {
    minC: 1,
    maxC: 100,
    countC: 5,
    index: 0,
  };

  // Pass data from child (commons component) to parent (single-player-game component)
  getPlayerData(value: any) {
    this.playerData = value;
    this.imagePreviewUrl =
      'http://localhost:8080/api/players/avatar/' + this.playerData?.playerId;
    console.log(this.playerData);
  }
}
