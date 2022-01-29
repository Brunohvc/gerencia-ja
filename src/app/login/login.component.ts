import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  VkontakteLoginProvider
} from 'angular-6-social-login-v2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private socialAuthService: AuthService
  ) {
  }

  username = '';
  password = '';
  selectedCar = undefined;
  cars = [
    { id: 1, name: 'Carro 1' },
    { id: 2, name: 'Carro 2' },
    { id: 3, name: 'Carro 3' },
    { id: 4, name: 'Carro 4' },
    { id: 5, name: 'Carro 5' },
  ]

  ngOnInit() {
  }

  logar() {
    console.log(this.username, this.password);
    const users = [
      { login: 'bruno', password: '123' },
      { login: 'henrique', password: '123' },
      { login: 'verbinnen', password: '123' },
      { login: 'a', password: 'a' },
    ];

    const find = users.find(e => e.login == this.username && e.password == this.password);

    if (find) {
      localStorage.setItem('USER', this.username);
      this.router.navigate(['/loja']);
    } else {
      alert('Usuário não cadastrado!');
    }
  }

  public socialSignIn() {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;



    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log("Sign in data : ", userData);
        // Now sign-in with userData
        // ...

      }
    );
  }

}
