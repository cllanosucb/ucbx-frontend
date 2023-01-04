import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncuestasService } from 'src/app/protected/services/encuestas.service';

import { Error, Success } from '../../../interfaces/respuestas';

@Component({
  selector: 'app-gen-activar',
  templateUrl: './gen-activar.component.html',
  styleUrls: ['./gen-activar.component.scss']
})
export class GenActivarComponent implements OnInit {

  error: Error = {
      ok: false,
      error: {
          msg: 'No existen datos para agregar',
          err: null,
      },
  };
  success: Success;
  successDatos: boolean = false;
  loading: boolean = true;
  errorDatos: boolean = false;
  display: boolean = false;

  constructor(
      private router: Router,
      private encuestasService: EncuestasService
  ) { }

  ngOnInit(): void {
    this.activarMateriasEstudiantes()
  }

  activarMateriasEstudiantes() {
    console.log("entra");
      this.encuestasService.activarMateriasEstudiantes()
          .subscribe(
              (resp) => {
                console.log(resp);
                
                  this.success = resp;
                  this.loading = false;
                  this.successDatos = true;
              },
              (err) => {
                  this.errorDatos = true;
                  this.loading = false;
                  this.error = err;
              }
          );
  }

  prevPage() {
    this.router.navigate(['index/gestionarEncuestas/pregrado/cargar']);
  }

  nextPage() {
      this.router.navigate(['index']);
  }

}
