import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Error, Success } from '../../interfaces/respuestas';
import { CalificacionesService } from '../../services/calificaciones.service';

@Component({
    selector: 'app-reg-califiicaciones',
    templateUrl: './reg-califiicaciones.component.html',
    styleUrls: ['./reg-califiicaciones.component.scss'],
})
export class RegCalifiicacionesComponent implements OnInit {
    cursosid: number[];
    error: Error = {
        ok: false,
        error: {
            msg: 'No existen datos para agregar',
            err: null,
        },
    };
    success: Success;
    loading: boolean = true;
    btnActive: boolean = true;
    errorDatos: boolean = false;
    successDatos: boolean = false;

    constructor(
        private router: Router,
        private calificacionesService: CalificacionesService
    ) {}

    ngOnInit(): void {
        this.verificarDatos();
    }

    verificarDatos() {
        this.cursosid = JSON.parse(localStorage.getItem('cursosid') || null);
        if (this.cursosid == null) {
            this.btnActive = false;
            this.errorDatos = true;
            this.loading = false;
        } else {
            this.guardarCalificacionesPorCurso();
        }
    }

    guardarCalificacionesPorCurso() {
        this.calificacionesService.postCalificaciones(this.cursosid).subscribe(
            (resp) => {
                console.log(resp);
                this.success = resp;
                this.loading = false;
                this.btnActive = false;
                this.successDatos = true;
                this.clearStorage();
            },
            (err) => {
                console.log(err);
                this.btnActive = false;
                this.errorDatos = true;
                this.loading = false;
                this.error = err;
            }
        );
    }

    clearStorage() {
        localStorage.removeItem('cursosapi');
        localStorage.removeItem('cursosid');
    }

    completado() {
        this.router.navigate(['index']);
    }
}
