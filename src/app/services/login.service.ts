import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getUsers(){
    return [
      {usuario: "admin", senha: "123"},
      {usuario: "teste", senha: "123"},
    ]
  }
}

