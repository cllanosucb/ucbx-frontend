import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { ComponentsModule } from './components/components.module';
import { CursosComponent } from './pages/cursos/cursos.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HomeComponent } from './pages/home/home.component';
import { StepsCursoComponent } from './pages/steps-curso/steps-curso.component';
import { RegCursosComponent } from './pages/reg-cursos/reg-cursos.component';
import { RegEstCursoComponent } from './pages/reg-est-curso/reg-est-curso.component';
import { RegModulosComponent } from './pages/reg-modulos/reg-modulos.component';
import { RegTareasComponent } from './pages/reg-tareas/reg-tareas.component';
import { RegCalifiicacionesComponent } from './pages/reg-califiicaciones/reg-califiicaciones.component';

@NgModule({
    declarations: [IndexComponent, CursosComponent, HomeComponent, StepsCursoComponent, RegCursosComponent, RegEstCursoComponent, RegModulosComponent, RegTareasComponent, RegCalifiicacionesComponent],
    imports: [
        CommonModule,
        ProtectedRoutingModule,
        ComponentsModule,
        PrimeNgModule,
    ],
})
export class ProtectedModule {}
