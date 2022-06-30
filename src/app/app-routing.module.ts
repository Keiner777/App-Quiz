import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PreguntaComponent } from './pregunta/pregunta.component';

const routes: Routes = [
  {path: "", redirectTo:'inicio', pathMatch:'full'},
  {path: "inicio", component: InicioComponent},
  {path: "pregunta", component: PreguntaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
