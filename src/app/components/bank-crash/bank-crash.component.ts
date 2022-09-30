import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-bank-crash',
  templateUrl: './bank-crash.component.html',
  styleUrls: ['./bank-crash.component.scss']
})
export class BankCrashComponent implements OnInit {
  tools: any = []
  toolsService: ToolsService
  
  constructor() { 
    this.toolsService = new ToolsService()
  }

  ngOnInit(): void {
    this.tools = this.toolsService.getHacks()
  }
  hackGeral(): void {
    console.log("É necessário criar um service... estudar sobre...") //adicionar saldo ao clicar...
  }

}
