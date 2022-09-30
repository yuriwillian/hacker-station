import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  getHacks() {
    return {
      bankCrash: {
        hackGeral: "Hack Geral",
        valorGeral: 1000.00,
        hackIndividual: "Hack Individual",
        valorIndividual: 500.00,
      }
    }
  }

  getDispositivos() {
    return [
      {
        modelo: "samsungJ8",
        username: "Thais",
        acessos: ["Câmera", "Microfone", "Arquivos", "Tela", "Root"]
  
      },
      {
        modelo: "iphone12",
        username: "Gustavo",
        acessos: ["Câmera", "Microfone", "Arquivos"]
      }
    ]
  }
}
