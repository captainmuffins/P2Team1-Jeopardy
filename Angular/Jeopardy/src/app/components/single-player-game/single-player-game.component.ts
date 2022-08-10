import { Component, OnInit } from '@angular/core';
import { JeopardyService } from 'src/app/services/jeopardy/jeopardy.service';

@Component({
  selector: 'app-single-player-game',
  templateUrl: './single-player-game.component.html',
  styleUrls: ['./single-player-game.component.css']
})
export class SinglePlayerGameComponent implements OnInit {

  constructor(_jeopardyService: JeopardyService) { }

  ngOnInit(): void {
  }

  getCategories() {

  }

}
