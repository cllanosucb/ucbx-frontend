import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionarEncuestasPregradoRoutingModule } from './gestionar-encuestas-pregrado-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { GenCargarComponent } from './gen-cargar/gen-cargar.component';
import { GenDesactivarComponent } from './gen-desactivar/gen-desactivar.component';
import { GenActivarComponent } from './gen-activar/gen-activar.component';
import { GenEncuestasComponent } from './gen-encuestas/gen-encuestas.component';


@NgModule({
  declarations: [
    GenCargarComponent,
    GenDesactivarComponent,
    GenActivarComponent,
    GenEncuestasComponent
  ],
  imports: [
    CommonModule,
    GestionarEncuestasPregradoRoutingModule,
    ComponentsModule,
    PrimeNgModule,
  ]
})
export class GestionarEncuestasPregradoModule { }
