import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/service/authenticate.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {

  constructor(
    public auth: AuthenticateService
  ) { }

}
