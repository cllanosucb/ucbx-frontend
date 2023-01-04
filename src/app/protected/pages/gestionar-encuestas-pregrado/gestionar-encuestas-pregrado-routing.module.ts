import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenActivarComponent } from './gen-activar/gen-activar.component';
import { GenCargarComponent } from './gen-cargar/gen-cargar.component';
import { GenDesactivarComponent } from './gen-desactivar/gen-desactivar.component';
import { GenEncuestasComponent } from './gen-encuestas/gen-encuestas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pregrado',
        component: GenEncuestasComponent,
        children: [
          {
            path: '',
            redirectTo: 'cargar',
            pathMatch: 'full',
          },
          { path: 'cargar', component: GenCargarComponent },
          {
              path: 'desactivarEstudiantes',
              component: GenDesactivarComponent,
          },
          {
              path: 'activarEstudiantes',
              component: GenActivarComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionarEncuestasPregradoRoutingModule { }
