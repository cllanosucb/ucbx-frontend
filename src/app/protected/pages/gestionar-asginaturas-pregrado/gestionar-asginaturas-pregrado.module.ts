import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionarAsginaturasPregradoRoutingModule } from './gestionar-asginaturas-pregrado-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { GasignaturasComponent } from './gasignaturas/gasignaturas.component';
import { GaCargarComponent } from './ga-cargar/ga-cargar.component';
import { GaCrearDocentesComponent } from './ga-crear-docentes/ga-crear-docentes.component';
import { GaCrearPlantillasComponent } from './ga-crear-plantillas/ga-crear-plantillas.component';
import { GaCrearParalelosComponent } from './ga-crear-paralelos/ga-crear-paralelos.component';
import { GaAsignarDocenteComponent } from './ga-asignar-docente/ga-asignar-docente.component';

@NgModule({
    declarations: [
        GasignaturasComponent,
        GaCargarComponent,
        GaCrearDocentesComponent,
        GaCrearPlantillasComponent,
        GaCrearParalelosComponent,
        GaAsignarDocenteComponent,
    ],
    imports: [
        CommonModule,
        GestionarAsginaturasPregradoRoutingModule,
        ComponentsModule,
        PrimeNgModule,
    ],
})
export class GestionarAsginaturasPregradoModule {}
