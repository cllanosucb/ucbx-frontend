import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-gen-encuestas',
  templateUrl: './gen-encuestas.component.html',
  styleUrls: ['./gen-encuestas.component.scss']
})
export class GenEncuestasComponent implements OnInit {

  items: MenuItem[];
  activeIndex: number = 1;


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Cargar Datos Encuesta',
          routerLink: 'cargar',
      },
      {
          label: 'Desactivar Materias de Estudiante',
          routerLink: 'desactivarEstudiantes',
      },
      {
          label: 'Activar Materias de Estudiante',
          routerLink: 'activarEstudiantes',
      },
    ];
  }

}
