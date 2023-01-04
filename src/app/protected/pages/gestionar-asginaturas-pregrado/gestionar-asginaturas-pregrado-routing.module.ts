import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaAsignarDocenteComponent } from './ga-asignar-docente/ga-asignar-docente.component';
import { GaCargarComponent } from './ga-cargar/ga-cargar.component';
import { GaCrearDocentesComponent } from './ga-crear-docentes/ga-crear-docentes.component';
import { GaCrearParalelosComponent } from './ga-crear-paralelos/ga-crear-paralelos.component';
import { GaCrearPlantillasComponent } from './ga-crear-plantillas/ga-crear-plantillas.component';
import { GasignaturasComponent } from './gasignaturas/gasignaturas.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'pregrado',
                component: GasignaturasComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'cargar',
                        pathMatch: 'full',
                    },
                    { path: 'cargar', component: GaCargarComponent },
                    {
                        path: 'crearDocentes',
                        component: GaCrearDocentesComponent,
                    },
                    {
                        path: 'crearPlantillas',
                        component: GaCrearPlantillasComponent,
                    },
                    {
                        path: 'crearParalelos',
                        component: GaCrearParalelosComponent,
                    },
                    {
                        path: 'asignarDocentes',
                        component: GaAsignarDocenteComponent,
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GestionarAsginaturasPregradoRoutingModule {}
