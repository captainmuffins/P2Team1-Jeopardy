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

  newPlayerData: any = {
    playerId: 0,
    playerUsername: null,
    playerFirstname: null,
    playerLastname: null,
    playerPassword: null,
    playerEmail: null,
    playerAvatar: null,
  };

  // for manipulating elements in page
  indexData = {
    hideProfileSubmitText: false,
    hideProfileSubmitLoading: true,
    hidePasswordSubmitText: false,
    hidePasswordSubmitLoading: true,
    disableSubmit: false,
    hideSuccessStatus: true,
    hideFailStatus: true,
    successStatusMessage: '',
    failStatusMessage: '',
    isGuest: true,
  };

  confirmPassword = '';

  imagePreviewUrl: any = '/assets/img/default_avatar.png';

  constructor(
    private _player: PlayersService,
    private _router: Router,
    private _cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.initPlayer();
  }

  initPlayer() {
    this._player.getCurrentSession().subscribe({
      next: (data) => {
        console.log('--- success ---');
        let receivedData = data.statusObject;

        receivedData.playerFirstname = this.toTitleCase(
          receivedData.playerFirstname
        );
        receivedData.playerLastname = this.toTitleCase(
          receivedData.playerLastname
        );

        receivedData.playerPassword = null;
        this.indexData.isGuest = false;

        this.currentPlayerData = receivedData;
        this.newPlayerData = receivedData;
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

  toTitleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(' ')
      .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(' ');
  };

  avatarUpload(event: Event) {
    let inputFile = event.target as HTMLInputElement;
    if (inputFile.files && inputFile.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(inputFile.files[0]);

      reader.onload = (event) => {
        this.imagePreviewUrl = event.target?.result;
      };
    }
  }

  checkPassword(event: Event) {
    const formElem = document.getElementById(
      'updatePasswordForm'
    ) as HTMLFormElement;
    const password1 = document.getElementById(
      'playerPassword'
    ) as HTMLInputElement;
    const password2 = document.getElementById(
      'confirmPassword'
    ) as HTMLInputElement;
    formElem.classList.remove('invalid-password');
    formElem.classList.remove('valid-password');
    if (password1 != null && password2 != null) {
      if (password1.value.length > 0 && password2.value.length > 0) {
        if (password1.value != password2.value) {
          formElem.classList.add('invalid-password');
        } else {
          formElem.classList.add('valid-password');
        }
      } else {
        formElem.classList.add('invalid-password');
      }
    }
  }

  changePassword() {
    const formElem = document.getElementById(
      'updatePasswordForm'
    ) as HTMLFormElement;
    const password1 = document.getElementById(
      'playerPassword'
    ) as HTMLInputElement;
    const password2 = document.getElementById(
      'confirmPassword'
    ) as HTMLInputElement;
    this.indexData.hidePasswordSubmitText = true;
    this.indexData.hidePasswordSubmitLoading = false;
    this.indexData.disableSubmit = true;
    this.indexData.hideSuccessStatus = true;
    this.indexData.hideFailStatus = true;
    if (formElem.checkValidity()) {
      if (password1.value != password2.value) {
        formElem.classList.add('invalid-password');
        this.indexData.hidePasswordSubmitText = false;
        this.indexData.hidePasswordSubmitLoading = true;
        this.indexData.disableSubmit = false;
        this.indexData.hideFailStatus = false;
        this.indexData.failStatusMessage = 'Passwords must match';
      } else {
        formElem.classList.add('valid-password');

        this._player.changePassword(this.newPlayerData).subscribe({
          next: (data) => {
            this.indexData.hidePasswordSubmitText = false;
            this.indexData.hidePasswordSubmitLoading = true;
            this.indexData.disableSubmit = false;
            this.indexData.hideSuccessStatus = false;

            let receivedData = data.statusObject;

            receivedData.playerFirstname = this.toTitleCase(
              receivedData.playerFirstname
            );
            receivedData.playerLastname = this.toTitleCase(
              receivedData.playerLastname
            );

            receivedData.playerPassword = null;
            this.confirmPassword = '';

            this.currentPlayerData = receivedData;
            this.newPlayerData = receivedData;
            this.indexData.successStatusMessage = 'Updated your password';
            // redirect to login route upon successful registration
            /*
            setTimeout(() => {
              this._router.navigate(['/']);
            }, 1000);
            */
          },
          error: (err) => {
            const data = err.error;
            this.indexData.hidePasswordSubmitText = false;
            this.indexData.hidePasswordSubmitLoading = true;
            this.indexData.disableSubmit = false;
            this.indexData.hideFailStatus = false;
            if (data.statusMessage != undefined) {
              this.indexData.failStatusMessage = data.statusMessage;
            } else {
              this.indexData.failStatusMessage =
                "Couldn't update password. Make sure server is running.";
            }
          },
        });
      }
    } else {
      this.indexData.hidePasswordSubmitText = false;
      this.indexData.hidePasswordSubmitLoading = true;
      this.indexData.disableSubmit = false;
      this.indexData.hideFailStatus = false;
      this.indexData.failStatusMessage = 'Passwords cannot be empty';
    }
    formElem.classList.add('was-validated');
  }

  updateProfile() {
    const formElem = document.getElementById(
      'updateProfileForm'
    ) as HTMLFormElement;

    if (formElem.checkValidity()) {
      this.indexData.hideProfileSubmitText = true;
      this.indexData.hideProfileSubmitLoading = false;
      this.indexData.disableSubmit = true;
      this.indexData.hideSuccessStatus = true;
      this.indexData.hideFailStatus = true;
      this._player.updatePlayer(this.newPlayerData).subscribe({
        next: (data) => {
          this.indexData.hideProfileSubmitText = false;
          this.indexData.hideProfileSubmitLoading = true;
          this.indexData.disableSubmit = false;
          this.indexData.hideSuccessStatus = false;

          let receivedData = data.statusObject;

          receivedData.playerFirstname = this.toTitleCase(
            receivedData.playerFirstname
          );
          receivedData.playerLastname = this.toTitleCase(
            receivedData.playerLastname
          );

          receivedData.playerPassword = null;

          this.currentPlayerData = receivedData;
          this.newPlayerData = receivedData;
          this.indexData.successStatusMessage = 'Updated your profile';
          // redirect to login route upon successful registration
          /*
            setTimeout(() => {
              this._router.navigate(['/']);
            }, 1000);
            */
        },
        error: (err) => {
          const data = err.error;
          this.indexData.hideProfileSubmitText = false;
          this.indexData.hideProfileSubmitLoading = true;
          this.indexData.disableSubmit = false;
          this.indexData.hideFailStatus = false;
          if (data.statusMessage != undefined) {
            this.indexData.failStatusMessage = data.statusMessage;
          } else {
            this.indexData.failStatusMessage =
              "Couldn't update profile. Make sure server is running.";
          }
        },
      });
    }
    formElem.classList.add('was-validated');
  }
}
