import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Rsemestre } from 'src/app/protected/interfaces/semestres';
import { CursosService } from 'src/app/protected/services/cursos.service';
import { Error, Success } from '../../../interfaces/respuestas';

@Component({
    selector: 'app-ga-crear-plantillas',
    templateUrl: './ga-crear-plantillas.component.html',
    styleUrls: ['./ga-crear-plantillas.component.scss'],
})
export class GaCrearPlantillasComponent implements OnInit {
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

    constructor(private router: Router, private cursosService: CursosService) {}

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
            this.registrarPlantillas();
        }
    }

    registrarPlantillas() {
        this.cursosService
            .crearPlantillasPracticasPregrado(
                this.asemestre.id_periodo_academico,
                this.asemestre.id_regional
            )
            .subscribe(
                (resp) => {
                    this.success = resp;
                    this.loading = false;
                    this.btnActive = false;
                    this.successDatos = true;
                    // console.log(resp);
                },
                (err) => {
                    this.errorDatos = true;
                    this.loading = false;
                    this.error = err;
                    this.btnActiveBack = false;
                }
            );
    }

    prevPage() {
        this.router.navigate([
            'index/gestionarAsignaturasPracticas/pregrado/cargar',
        ]);
    }

    nextPage() {
        this.router.navigate([
            'index/gestionarAsignaturasPracticas/pregrado/crearParalelos',
        ]);
    }
}
