import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-steps-curso',
    templateUrl: './steps-curso.component.html',
    styleUrls: ['./steps-curso.component.scss'],
})
export class StepsCursoComponent implements OnInit {
    items: MenuItem[];
    activeIndex: number = 1;

    constructor() {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'Registar Cursos',
                routerLink: 'cursos',
            },
            {
                label: 'Registar Estudiantes por Curso',
                routerLink: 'estudiantes',
            },
            {
                label: 'Registar Modulos por Curso',
                routerLink: 'modulos',
            },
            {
                label: 'Registar Tareas por Curso',
                routerLink: 'tareas',
            },
            {
                label: 'Registar Calificaciones por Curso',
                routerLink: 'calificaciones',
            },
            // {
            //   label: 'Registar Modulos',
            //   routerLink: 'registrar/modulos'
            // },
            // {
            //   label: 'Registar Notas de Estudiantes',
            //   routerLink: 'registrar/notas/estudiantes'
            // },
        ];
    }
}
