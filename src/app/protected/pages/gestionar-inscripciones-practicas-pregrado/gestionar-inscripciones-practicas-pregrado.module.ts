import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionarInscripcionesPracticasPregradoRoutingModule } from './gestionar-inscripciones-practicas-pregrado-routing.module';
import { GiCargarComponent } from './gi-cargar/gi-cargar.component';
import { GiCrearEstudiantesComponent } from './gi-crear-estudiantes/gi-crear-estudiantes.component';
import { GiRetirosEstudiantesComponent } from './gi-retiros-estudiantes/gi-retiros-estudiantes.component';
import { GiInscribirEstudiantesComponent } from './gi-inscribir-estudiantes/gi-inscribir-estudiantes.component';
import { GiInscripcionesComponent } from './gi-inscripciones/gi-inscripciones.component';
import { ComponentsModule } from '../../components/components.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

@NgModule({
    declarations: [
        GiCargarComponent,
        GiCrearEstudiantesComponent,
        GiRetirosEstudiantesComponent,
        GiInscribirEstudiantesComponent,
        GiInscripcionesComponent,
    ],
    imports: [
        CommonModule,
        GestionarInscripcionesPracticasPregradoRoutingModule,
        ComponentsModule,
        PrimeNgModule,
    ],
})
export class GestionarInscripcionesPracticasPregradoModule {}
