import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispositivos-contaminados',
  templateUrl: './dispositivos-contaminados.component.html',
  styleUrls: ['./dispositivos-contaminados.component.scss']
})
export class DispositivosContaminadosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  dispositivos: any[] = [
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
