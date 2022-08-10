import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players/players.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  indexData = {
    isGuest: true,
  };

  constructor(
    private _player: PlayersService,
    private _cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.initPlayer();
  }

  initPlayer() {
    if (this._cookieService.get('JSESSIONID') != undefined) {
      console.log('%c[User is logged in]', 'color: blue');
      this._player.getCurrentSession().subscribe({
        next: (data) => {
          this.indexData.isGuest = false;
        },
        error: (err) => {
          // console.log(err);
        },
      });
    } else {
      console.log('%c[User is a guest]', 'color: orange');
    }
  }
}
