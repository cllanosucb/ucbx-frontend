import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Error, Success } from 'src/app/protected/interfaces/respuestas';
import {
    Datum,
    Rsemestre,
    Semestres,
} from 'src/app/protected/interfaces/semestres';
import { CursosService } from 'src/app/protected/services/cursos.service';
import { SemestresService } from 'src/app/protected/services/semestres.service';

@Component({
    selector: 'app-ga-cargar',
    templateUrl: './ga-cargar.component.html',
    styleUrls: ['./ga-cargar.component.scss'],
})
export class GaCargarComponent implements OnInit {
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
    semestres: Datum[];
    listSemestres: Rsemestre[];
    asemestre: Rsemestre;
    btnActive: boolean = true;
    display: boolean = false;

    constructor(
        private router: Router,
        private semestresService: SemestresService,
        private cursosService: CursosService
    ) {}

    ngOnInit(): void {
        this.getSemestres();
    }

    getSemestres() {
        this.semestresService.getSemestresActivos().subscribe(
            (resp) => {
                this.loading = false;
                // this.semestres = resp.data;
                this.listSemestres = this.transformarDatosSemestre(resp.data);
            },
            (err) => {
                this.errorDatos = true;
                this.loading = false;
                this.error = err;
            }
        );
    }

    transformarDatosSemestre(semestres) {
        let list: Rsemestre[] = [];
        semestres.forEach((s) => {
            const l: Rsemestre = {
                id_periodo_academico: s.id_periodo_academico,
                resumido: s.resumido,
                id_regional: s.id_regional,
                sigla_regional: s.sigla_regional,
                nombre_regional: s.nombre_regional,
                name: `[${s.resumido}] - ${s.nombre_regional}`,
            };
            list.push(l);
        });
        return list;
    }

    selectSemestre(event) {
        this.asemestre = event.value;
        this.btnActive = false;
    }

    nextPage() {
        localStorage.setItem('semestre', JSON.stringify(this.asemestre));
        this.router.navigate(['index/asignaturas/pregrado/crearDocentes']);
    }

    subir(event) {
        this.display = true;
        const file = event.files[0];
        console.log(file);
        let formData = new FormData();
        formData.append('archivo', file, file.name);
        this.cursosService.subirArchivoPregrado(formData).subscribe(
            (resp) => {
                this.success = resp;
                this.successDatos = true;
                this.display = false;
            },
            (err) => {
                this.errorDatos = true;
                this.loading = false;
                this.error = err;
                this.display = false;
            }
        );
    }
}
