import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Rsemestre } from 'src/app/protected/interfaces/semestres';
import { UsuariosService } from 'src/app/protected/services/usuarios.service';
import { Error, Success } from '../../../interfaces/respuestas';

@Component({
    selector: 'app-ga-asignar-docente',
    templateUrl: './ga-asignar-docente.component.html',
    styleUrls: ['./ga-asignar-docente.component.scss'],
})
export class GaAsignarDocenteComponent implements OnInit {
    asemestre: Rsemestre;
    error: Error = {
        ok: false,
        error: {
            msg: 'No se selecciono ningun semestre para ejecutar la accion',
            err: null,
        },
    };
    success: Success;
    loading: boolean = true;
    btnActive: boolean = true;
    errorDatos: boolean = false;
    successDatos: boolean = false;
    btnActiveBack: boolean = true;

    constructor(
        private router: Router,
        private usuariosService: UsuariosService
    ) {}

    ngOnInit(): void {
        this.verificarDatos();
    }

    verificarDatos() {
        this.asemestre = JSON.parse(localStorage.getItem('semestre') || null);
        if (this.asemestre == null) {
            this.errorDatos = true;
            this.loading = false;
            this.btnActiveBack = false;
        } else {
            // console.log(this.asemestre);
            this.asignarParalelosDocentesPregrado();
        }
    }

    asignarParalelosDocentesPregrado() {
        this.usuariosService
            .asignarParalelosDocentesPregrado(
                this.asemestre.id_periodo_academico,
                this.asemestre.id_regional
            )
            .subscribe(
                (resp) => {
                    this.success = resp;
                    this.loading = false;
                    this.btnActive = false;
                    this.successDatos = true;
                    localStorage.removeItem('semestre');
                    // console.log(resp);
                },
                (err) => {
                    this.errorDatos = true;
                    this.loading = false;
                    this.error = err;
                    this.btnActiveBack = false;
                    localStorage.removeItem('semestre');
                }
            );
    }

    prevPage() {
        this.router.navigate(['index/asignaturas/pregrado/cargar']);
    }

    nextPage() {
        localStorage.removeItem('semestre');
        this.router.navigate(['index']);
    }
}
