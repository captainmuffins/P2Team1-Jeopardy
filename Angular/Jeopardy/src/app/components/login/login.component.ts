import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  // player data to be submitted
  loginPlayerData: any = {};

  // for manipulating elements in page
  loginData = {
    hideSubmitText: false,
    hideSubmitLoading: true,
    disableSubmit: false,
    hideSuccessStatus: true,
    hideFailStatus: true,
    failStatusMessage: '',
  };

  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginPlayer() {
    const formElem = document.querySelectorAll('form');
    formElem.forEach((element) => {
      if (element.checkValidity()) {
        this.loginData.hideSubmitText = true;
        this.loginData.hideSubmitLoading = false;
        this.loginData.disableSubmit = true;
        this.loginData.hideSuccessStatus = true;
        this.loginData.hideFailStatus = true;
        this._auth.loginPlayer(this.loginPlayerData).subscribe({
          next: (data) => {
            this.loginData.hideSubmitText = false;
            this.loginData.hideSubmitLoading = true;
            this.loginData.disableSubmit = false;
            this.loginData.hideSuccessStatus = false;
            // redirect to login route upon successful registration
            /*
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 1000);
            */
          },
          error: (err) => {
            const data = err.error;
            this.loginData.hideSubmitText = false;
            this.loginData.hideSubmitLoading = true;
            this.loginData.disableSubmit = false;
            this.loginData.hideFailStatus = false;
            this.loginData.failStatusMessage = data.statusMessage;
          },
        });
      }
      element.classList.add('was-validated');
    });
  }
}
