import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoAPI } from '../../interfaces/cursos';
import { Error, Success } from '../../interfaces/respuestas';
import { CursosService } from '../../services/cursos.service';

@Component({
    selector: 'app-reg-cursos',
    templateUrl: './reg-cursos.component.html',
    styleUrls: ['./reg-cursos.component.scss'],
})
export class RegCursosComponent implements OnInit {
    cursosapi: CursoAPI[];
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

    constructor(private router: Router, private cursosService: CursosService) {}

    ngOnInit(): void {
        this.verificarDatos();
    }

    verificarDatos() {
        this.cursosapi = JSON.parse(localStorage.getItem('cursosapi') || null);
        if (this.cursosapi == null) {
            this.errorDatos = true;
            this.loading = false;
        } else {
            this.guardarCursos();
        }
    }

    guardarCursos() {
        this.cursosService.postCursos(this.cursosapi).subscribe(
            (resp) => {
                this.success = resp;
                this.loading = false;
                this.btnActive = false;
                this.successDatos = true;
            },
            (err) => {
                this.errorDatos = true;
                this.loading = false;
                this.error = err;
            }
        );
    }

    nextPage() {
        // this.router.navigateByUrl('index/registrar/datos/estudiantes');
        this.router.navigate(['index/registrar/datos/estudiantes']);
    }
}
