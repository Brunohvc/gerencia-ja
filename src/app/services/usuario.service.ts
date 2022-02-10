import { Injectable } from '@angular/core';
// ng generate service services/usuario
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  buscarUsuarios() {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/buscar_usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

}
