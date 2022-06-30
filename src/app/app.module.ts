import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CambiarBgDirective } from './cambiar-bg.directive';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PreguntaComponent,
    NavbarComponent,
    CambiarBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
