import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CadstroPedidosComponent } from './cadstro-pedidos/cadstro-pedidos.component';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LojaComponent } from './loja/loja.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from "angular-6-social-login-v2";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("client-provider-key")
      }
    ]
  );
  return config;
}

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loja', component: LojaComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/:id', component: CadastroClientesComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos/:id', component: CadastroProdutosComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'pedidos/:id', component: CadstroPedidosComponent },
  { path: '*', redirectTo: '' }
];

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    ClientesComponent,
    CadastroClientesComponent,
    ProdutosComponent,
    CadastroProdutosComponent,
    PedidosComponent,
    CadstroPedidosComponent,
    LojaComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
