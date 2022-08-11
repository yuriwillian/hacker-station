import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  validaLogin(): void {
    const usuario = "admin"
    const senha = "123"
    let usuarioDigitado = (<HTMLInputElement>document.getElementById("usuario"))
    let senhaDigitada = (<HTMLInputElement>document.getElementById("senha"))
    let erros = (<HTMLInputElement>document.getElementById("erros"))
    console.log(`Usuario digitado:${usuarioDigitado.value}\nSenha digitada:${senhaDigitada.value}`)
    if(usuarioDigitado.value == usuario && senhaDigitada.value == senha){
      console.log("\nAcesso permitido!")
      erros.innerHTML = "<p>Em breve acesso estará disponível</p>"

    }else if(usuarioDigitado.value == "" || senhaDigitada.value == ""){
      let erros = (<HTMLInputElement>document.getElementById("erros"))
      erros.style.display = "block"
      erros.style.marginTop = "10px"
      erros.innerHTML = `
        <p>TODOS OS CAMPOS SÃO OBRIGATÓRIOS</p>
      `
      window.alert("Todos os campos são obrigatórios.")
    }else{
      console.log("\nAcesso NEGADO!")
      erros.style.display = "block"
      erros.style.marginTop = "10px"
      erros.innerHTML = `
        <p>Usuario ou senha inválidos. Tente novamente!</p>
        <p>Não possui uma conta?<a href="">Clique aqui para cadastrar-se</a></p>
        <br>
        <details>
          <summary>Clique aqui para ver detalhes do erro</summary>
          <p>
            Os dados a seguir não estão cadastrados no sistema:
            <br>
            Usuario: ${usuarioDigitado.value} 
            <br>
            Senha: ${senhaDigitada.value}
          </p>
        </details>
        
      `
    }

    usuarioDigitado.value = ""
    senhaDigitada.value = ""
  }

  
}
