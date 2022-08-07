import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players/players.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  currentPlayerData: any = {};

  constructor(private _player: PlayersService, private _router: Router, private _cookieService: CookieService) {}

  ngOnInit(): void {
    this.initPlayer();
  }

  initPlayer() {
    this._player.getCurrentSession().subscribe({
      next: (data) => {
        console.log('--- success ---');
        this.currentPlayerData = data.statusObject;
      },
      error: (err) => {
        console.log('--- error ---');
        console.log(err);
      },
    });
  }

  doLogout() {
    // Delete all cookies
    this._cookieService.removeAll();
    // Redirect to login page
    this._router.navigate(['/login']);
  }
}
