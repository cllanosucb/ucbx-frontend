import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
    selector: 'app-gasignaturas',
    templateUrl: './gasignaturas.component.html',
    styleUrls: ['./gasignaturas.component.scss'],
})
export class GasignaturasComponent implements OnInit {
    items: MenuItem[];
    activeIndex: number = 1;

    constructor() {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'Cargar Datos Asignaturas, Inscripciones',
                routerLink: 'cargar',
            },
            {
                label: 'Registrar Docentes',
                routerLink: 'crearDocentes',
            },
            {
                label: 'Registar Plantillas',
                routerLink: 'crearPlantillas',
            },
            {
                label: 'Registar Paralelos',
                routerLink: 'crearParalelos',
            },
            {
                label: 'Asignar Docentes Paralelos',
                routerLink: 'asignarDocentes',
            },
        ];
    }
}
