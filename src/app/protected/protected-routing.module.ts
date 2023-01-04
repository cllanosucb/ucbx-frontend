import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './pages/cursos/cursos.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { RegCalifiicacionesComponent } from './pages/reg-califiicaciones/reg-califiicaciones.component';
import { RegCursosComponent } from './pages/reg-cursos/reg-cursos.component';
import { RegEstCursoComponent } from './pages/reg-est-curso/reg-est-curso.component';
import { RegModulosComponent } from './pages/reg-modulos/reg-modulos.component';
import { RegTareasComponent } from './pages/reg-tareas/reg-tareas.component';
import { StepsCursoComponent } from './pages/steps-curso/steps-curso.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: IndexComponent,
                children: [
                    { path: '', component: HomeComponent },
                    { path: 'cursos', component: CursosComponent },
                    {
                        path: 'registrar/datos',
                        component: StepsCursoComponent,
                        children: [
                            {
                                path: '',
                                redirectTo: 'cursos',
                                pathMatch: 'full',
                            },
                            { path: 'cursos', component: RegCursosComponent },
                            {
                                path: 'estudiantes',
                                component: RegEstCursoComponent,
                            },
                            { path: 'modulos', component: RegModulosComponent },
                            { path: 'tareas', component: RegTareasComponent },
                            {
                                path: 'calificaciones',
                                component: RegCalifiicacionesComponent,
                            },
                        ],
                    },

                    /* {
                        path: 'asignaturas',
                        loadChildren: () =>
                            import('./pages/pregrado/pregrado.module').then(
                                (m) => m.PregradoModule
                            ),
                    }, */
                    {
                        path: 'gestionarAsignaturas',
                        loadChildren: () =>
                            import(
                                './pages/gestionar-asginaturas-pregrado/gestionar-asginaturas-pregrado.module'
                            ).then((m) => m.GestionarAsginaturasPregradoModule),
                    },
                    {
                        path: 'gestionarInscripciones',
                        loadChildren: () =>
                            import(
                                './pages/gestionar-inscripciones-pregrado/gestionar-inscripciones-pregrado.module'
                            ).then(
                                (m) => m.GestionarInscripcionesPregradoModule
                            ),
                    },
                    //asignaturas practicas
                    {
                        path: 'gestionarAsignaturasPracticas',
                        loadChildren: () =>
                            import(
                                './pages/gestionar-asginaturas-practicas-pregrado/gestionar-asginaturas-practicas-pregrado.module'
                            ).then(
                                (m) =>
                                    m.GestionarAsginaturasPracticasPregradoModule
                            ),
                    },
                    //asignaturas practicas
                    //inscripciones practicas
                    {
                        path: 'gestionarInscripcionesPracticas',
                        loadChildren: () =>
                            import(
                                './pages/gestionar-inscripciones-practicas-pregrado/gestionar-inscripciones-practicas-pregrado.module'
                            ).then(
                                (m) =>
                                    m.GestionarInscripcionesPracticasPregradoModule
                            ),
                    },
                    //inscripciones practicas
                    {
                        path: 'gestionarEncuestas',
                        loadChildren: () =>
                            import(
                                './pages/gestionar-encuestas-pregrado/gestionar-encuestas-pregrado.module'
                            ).then((m) => m.GestionarEncuestasPregradoModule),
                    },
                ],
            },
            { path: '**', redirectTo: '' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProtectedRoutingModule {}
