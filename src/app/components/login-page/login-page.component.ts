import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validaLogin(event: any): void {
    if (event.key === "Enter" || event.key === undefined) {
      const usuario = "admin"
      const senha = "123"
      let usuarioDigitado = (<HTMLInputElement>document.getElementById("usuario"))
      let senhaDigitada = (<HTMLInputElement>document.getElementById("senha"))
      let erros = (<HTMLInputElement>document.getElementById("erros"))
      let btnLogin = (<HTMLInputElement>document.getElementById("btnLogin"))
      if(usuarioDigitado.value == usuario && senhaDigitada.value == senha){
        this.router.navigate(['/home'])
      }else if(usuarioDigitado.value == "" || senhaDigitada.value == ""){
        erros.className = "errosAtivo"
        erros.innerHTML = `
          <p>TODOS OS CAMPOS SÃO OBRIGATÓRIOS</p>
        `
      }else{
        erros.className = "errosAtivo"
        erros.innerHTML = `
          <p>Usuario ou senha inválidos. Tente novamente!</p>
          <p>Não possui uma conta?<a href="">Clique aqui para cadastrar-se</a></p>
          <br>
          <details>
            <summary>Clique aqui para ver detalhes do erro</summary>
            <p>
              Os dados a seguir <strong>não estão cadastrados no sistema:</strong>
              <br>
              Usuario digitado: ${usuarioDigitado.value} 
              <br>
              Senha digitada: ${senhaDigitada.value}
            </p>
          </details>
          
        `
      }

      usuarioDigitado.value = ""
      senhaDigitada.value = ""
    }
  }
}
