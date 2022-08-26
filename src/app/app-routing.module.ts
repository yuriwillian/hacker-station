import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankCrashComponent } from './components/bank-crash/bank-crash.component';
import { DispositivosContaminadosComponent } from './components/dispositivos-contaminados/dispositivos-contaminados.component';
import { HackIndividualComponent } from './components/hack-individual/hack-individual.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ToolsComponent } from './components/tools/tools.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'dispositivos-contaminados', component: DispositivosContaminadosComponent },
  { path: 'bank-crash', component: BankCrashComponent },
  { path: 'hack-individual', component: HackIndividualComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
