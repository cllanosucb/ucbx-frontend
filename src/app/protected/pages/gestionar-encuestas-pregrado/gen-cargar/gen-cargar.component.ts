import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Error, Success } from 'src/app/protected/interfaces/respuestas';
import { EncuestasService } from '../../../services/encuestas.service';

@Component({
  selector: 'app-gen-cargar',
  templateUrl: './gen-cargar.component.html',
  styleUrls: ['./gen-cargar.component.scss']
})
export class GenCargarComponent implements OnInit {

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
        this.loading = false;
    }

    subir(event) {
        this.display = true;
        const file = event.files[0];
        console.log(file);
        let formData = new FormData();
        formData.append('archivo', file, file.name);
        this.encuestasService.subirArchivoEncuesta(formData).subscribe(
            (resp) => {           
                this.success = resp;
                this.successDatos = true;
                this.display = false;
            },
            (err) => {
                console.log(err);                
                this.errorDatos = true;
                this.loading = false;
                this.error = err;
                this.display = false;
            }
        );
    }

    nextPage() {
        this.router.navigate([
            'index/gestionarEncuestas/pregrado/desactivarEstudiantes',
        ]);
    }

}
