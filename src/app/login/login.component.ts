import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../services/usuario.service';

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
    private usuarioService: UsuarioService,
    private router: Router,
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
    this.usuarioService.buscarUsuarios()
      .then(resultado => {
        console.log('RESULTADO:', resultado);
      }).catch(erro => {
        console.log('ERRO AO BUSCAR USUARIOS:', erro);
      })
  }

  logar() {
    // this.usuarioService.login(this.username, this.password).then((dados: any) => {
    //   if (dados.user) {
    //     console.log(dados);
    //     localStorage.setItem('USER', dados.user.nickname);
    //     this.router.navigate(['/loja']);
    //   } else {
    //     alert('Usuário e senha incorretos!');
    //   }
    // }).catch(erro => {
    //   console.log(erro);
    // });
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
