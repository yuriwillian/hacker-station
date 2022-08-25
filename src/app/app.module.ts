import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ToolsComponent } from './components/tools/tools.component';
import { DispositivosContaminadosComponent } from './components/dispositivos-contaminados/dispositivos-contaminados.component';
import { BankCrashComponent } from './components/bank-crash/bank-crash.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginPageComponent,
    ToolsComponent,
    DispositivosContaminadosComponent,
    BankCrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
