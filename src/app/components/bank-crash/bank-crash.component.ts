import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-crash',
  templateUrl: './bank-crash.component.html',
  styleUrls: ['./bank-crash.component.scss']
})
export class BankCrashComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hackIndividual(): void {
    this.router.navigate(['/hack-individual'])
  }

  hackGeral(): void {
    console.log("É necessário criar um 'service'... estudar sobre...")
  }

}
