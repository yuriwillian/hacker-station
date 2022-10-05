import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  login: any = []
  loginService: LoginService

  constructor(private router: Router) {
    this.loginService = new LoginService()
   }
  ngOnInit(): void {
    this.login = this.loginService.getUsers()
    console.log(`
      Usuários e senhas contidos em "getUsers()":\n
      User: ${this.login[0].usuario}\n
      Password: ${this.login[0].senha}
      ------------------------
      User: ${this.login[1].usuario}\n
      Password: ${this.login[1].senha}\n
      
    `) //ver o que fazer com esse service para o auto-preenchimento...

    let inputUser: any = (<HTMLInputElement>document.getElementById("usuario"))
    let inputPass: any = (<HTMLInputElement>document.getElementById("senha"))
    let userSalvo = localStorage.getItem("usuarios")
    let senhaSalva = localStorage.getItem("senhas")
    if(userSalvo || senhaSalva != null){
      inputUser.setAttribute("value", userSalvo)
      inputPass.setAttribute("value", senhaSalva)
    }
    
  }

  validaLogin(event: any): void {
    if (event.key === "Enter" || event.key === undefined) {
      const usuario = "admin"
      const senha = "123"
      let usuarioDigitado: any = (<HTMLInputElement>document.getElementById("usuario"))
      let senhaDigitada: any = (<HTMLInputElement>document.getElementById("senha"))
      let erros = (<HTMLInputElement>document.getElementById("erros"))
      if(usuarioDigitado.value == usuario && senhaDigitada.value == senha){
        let userSalvo = localStorage.getItem("usuarios")
        let senhaSalva = localStorage.getItem("senhas") 
        if(userSalvo != usuarioDigitado.value || senhaSalva != senhaDigitada.value){
          let salvarLogin = window.confirm("Deseja salvar seu usuario e senha?")
          if(salvarLogin == true){
            localStorage.setItem("usuarios", usuarioDigitado.value)
            localStorage.setItem("senhas", senhaDigitada.value)
          }
        }
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
