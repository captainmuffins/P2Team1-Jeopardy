import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  currentPlayerData: any = {};

  constructor(private _player: PlayersService, private router: Router) {}

  ngOnInit(): void {
    this.initPlayer();
  }

  initPlayer() {
    this._player.getCurrentSession().subscribe({
      next: (data) => {
        console.log('--- success ---');
        console.log(data);
        this.currentPlayerData = data.statusObject;
      },
      error: (err) => {
        console.log('--- error ---');
        console.log(err);
      },
    });
  }
}
