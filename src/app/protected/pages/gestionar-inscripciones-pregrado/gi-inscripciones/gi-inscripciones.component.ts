import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
    selector: 'app-gi-inscripciones',
    templateUrl: './gi-inscripciones.component.html',
    styleUrls: ['./gi-inscripciones.component.scss'],
})
export class GiInscripcionesComponent implements OnInit {
    items: MenuItem[];
    activeIndex: number = 1;

    constructor() {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'Cargar Datos Inscripciones Teóricas',
                routerLink: 'cargar',
            },
            {
                label: 'Registrar Estudiantes',
                routerLink: 'crearEstudiantes',
            },
            {
                label: 'Retiros de Estudiantes',
                routerLink: 'retirosEstudiantes',
            },
            {
                label: 'Inscripcion de Estudiantes',
                routerLink: 'inscripcionesEstudiantes',
            },
        ];
    }
}
