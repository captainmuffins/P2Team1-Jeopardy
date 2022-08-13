import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlayersService } from 'src/app/services/players/players.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog/confirmation-dialog.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styleUrls: ['./commons.component.css'],
})
export class CommonsComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();

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

  imageBackup: any = '';
  imagePreviewUrl: any = '/assets/img/default_avatar_alt.png';

  formAvatar: FormGroup;

  public get getPlayerData(): any {
    return this.currentPlayerData;
  }

  constructor(
    private _player: PlayersService,
    private _router: Router,
    private _cookieService: CookieService,
    private _confirmationDialogService: ConfirmationDialogService,
    private _fb: FormBuilder
  ) {
    this.formAvatar = this._fb.group({
      playerAvatar: [null],
    });
  }

  ngOnInit(): void {
    if (this._cookieService.get('JSESSIONID') != undefined) {
      console.log('%c[User is logged in]', 'color: blue');
      this.initPlayer();
    } else {
      console.log('%c[User is a guest]', 'color: orange');
    }
  }

  initPlayer() {
    this._player.getCurrentSession().subscribe({
      next: (data) => {
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

        this.imagePreviewUrl =
          'http://localhost:8080/api/players/avatar/' + receivedData.playerId;

          this.newItemEvent.emit(receivedData);
      },
      error: (err) => {
        // console.log(err);
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

  openConfirmationDialog() {
    this._confirmationDialogService
      .confirm('Upload Avatar', 'Do you want to upload the current image?')
      .then((confirmed) => {
        console.log('User confirmed:', confirmed);
        if (confirmed) {
          this.submitAvatar();
        } else {
          this.imagePreviewUrl = this.imageBackup;
        }
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }

  submitAvatar() {
    let formData: any = new FormData();

    formData.append('playerAvatar', this.formAvatar.get('playerAvatar')?.value);
    this._player.uploadAvatar(formData).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  selectAvatar(event: Event) {
    let inputFile = event.target as HTMLInputElement;
    if (inputFile.files && inputFile.files[0]) {
      this.formAvatar.patchValue({
        playerAvatar: inputFile.files[0],
      });
      console.log(inputFile.files[0]);
      console.log(this.formAvatar);

      this.formAvatar.get('playerAvatar')?.updateValueAndValidity();

      let reader = new FileReader();

      reader.readAsDataURL(inputFile.files[0]);
      reader.onload = (event) => {
        this.imageBackup = this.imagePreviewUrl;
        this.imagePreviewUrl = event.target?.result;
        this.openConfirmationDialog();
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
