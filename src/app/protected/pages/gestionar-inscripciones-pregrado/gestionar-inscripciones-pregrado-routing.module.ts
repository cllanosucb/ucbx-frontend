import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiCargarComponent } from './gi-cargar/gi-cargar.component';
import { GiCrearEstudiantesComponent } from './gi-crear-estudiantes/gi-crear-estudiantes.component';
import { GiInscribirEstudiantesComponent } from './gi-inscribir-estudiantes/gi-inscribir-estudiantes.component';
import { GiInscripcionesComponent } from './gi-inscripciones/gi-inscripciones.component';
import { GiRetirosEstudiantesComponent } from './gi-retiros-estudiantes/gi-retiros-estudiantes.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'pregrado',
                component: GiInscripcionesComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'cargar',
                        pathMatch: 'full',
                    },
                    { path: 'cargar', component: GiCargarComponent },
                    {
                        path: 'crearEstudiantes',
                        component: GiCrearEstudiantesComponent,
                    },
                    {
                        path: 'retirosEstudiantes',
                        component: GiRetirosEstudiantesComponent,
                    },
                    {
                        path: 'inscripcionesEstudiantes',
                        component: GiInscribirEstudiantesComponent,
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
export class GestionarInscripcionesPregradoRoutingModule {}
