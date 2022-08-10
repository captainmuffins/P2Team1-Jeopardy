import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  // player data to be submitted
  signUpPlayerData: any = {};

  // for manipulating elements in page
  registerData = {
    hideSubmitText: false,
    hideSubmitLoading: true,
    disableSubmit: false,
    hideSuccessStatus: true,
    hideFailStatus: true,
    failStatusMessage: '',
  };

  constructor(private _auth: AuthService, private _router: Router) {}

  signUpPlayer() {
    const formElem = document.querySelectorAll('form');
    const password1 = document.getElementById(
      'playerPassword'
    ) as HTMLInputElement;
    const password2 = document.getElementById(
      'confirmPassword'
    ) as HTMLInputElement;
    formElem.forEach((element) => {
      element.classList.remove('invalid-password');
      element.classList.remove('valid-password');
      if (element.checkValidity()) {
        if (password1 != null && password2 != null) {
          if (password1.value != password2.value) {
            element.classList.add('invalid-password');
          } else {
            element.classList.add('valid-password');
            this.registerData.hideSubmitText = true;
            this.registerData.hideSubmitLoading = false;
            this.registerData.disableSubmit = true;
            this.registerData.hideSuccessStatus = true;
            this.registerData.hideFailStatus = true;
            this._auth.registerPlayer(this.signUpPlayerData).subscribe({
              next: (data) => {
                this.registerData.hideSubmitText = false;
                this.registerData.hideSubmitLoading = true;
                this.registerData.disableSubmit = false;
                this.registerData.hideSuccessStatus = false;
                // redirect to login route upon successful registration
                setTimeout(() => {
                  this._router.navigate(['/login']);
                }, 1000);
              },
              error: (err) => {
                const data = err.error;
                this.registerData.hideSubmitText = false;
                this.registerData.hideSubmitLoading = true;
                this.registerData.disableSubmit = false;
                this.registerData.hideFailStatus = false;
                if (data.statusMessage != undefined) {
                  this.registerData.failStatusMessage = data.statusMessage;
                } else {
                  this.registerData.failStatusMessage =
                    "Couldn't register. Make sure server is running.";
                }
              },
            });
          }
        }
      }
      element.classList.add('was-validated');
    });
  }

  checkPassword(event: Event) {
    const formElem = document.querySelectorAll('form');
    const password1 = document.getElementById(
      'playerPassword'
    ) as HTMLInputElement;
    const password2 = document.getElementById(
      'confirmPassword'
    ) as HTMLInputElement;
    formElem[0].classList.remove('invalid-password');
    formElem[0].classList.remove('valid-password');
    if (password1 != null && password2 != null) {
      if (password1.value.length > 0 && password2.value.length > 0) {
        if (password1.value != password2.value) {
          formElem[0].classList.add('invalid-password');
        } else {
          formElem[0].classList.add('valid-password');
        }
      } else {
        formElem[0].classList.add('invalid-password');
      }
    }
  }

  ngOnInit(): void {}
}
