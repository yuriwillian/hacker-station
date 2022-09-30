import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-dispositivos-contaminados',
  templateUrl: './dispositivos-contaminados.component.html',
  styleUrls: ['./dispositivos-contaminados.component.scss']
})
export class DispositivosContaminadosComponent implements OnInit {

  tools: any = []
  toolsService: ToolsService
  
  constructor() { 
    this.toolsService = new ToolsService()
  }

  ngOnInit(): void {
    this.tools = this.toolsService.getDispositivos()
    console.log(`
     Segue informações de disp. infec. :\n
     ${this.tools[0].modelo}\n
     ${this.tools[0].username}\n
     ${this.tools[0].acessos}\n
    `)
  }

  verDispositivo(): void {
    // construir componente
  }
}
