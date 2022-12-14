import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verDispositivos(): void {
    this.router.navigate(['/dispositivos-contaminados'])
  }

  bankCrash(): void {
    this.router.navigate(['/bank-crash'])
  }

}
