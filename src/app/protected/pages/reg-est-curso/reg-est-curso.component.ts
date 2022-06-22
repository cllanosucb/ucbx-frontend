import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Error, Success } from '../../interfaces/respuestas';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
    selector: 'app-reg-est-curso',
    templateUrl: './reg-est-curso.component.html',
    styleUrls: ['./reg-est-curso.component.scss'],
})
export class RegEstCursoComponent implements OnInit {
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
        private usuariosService: UsuariosService
    ) {}

    ngOnInit(): void {
        this.verificarDatos();
    }

    verificarDatos() {
        this.cursosid = JSON.parse(localStorage.getItem('cursosid') || null);
        if (this.cursosid == null) {
            this.errorDatos = true;
            this.loading = false;
        } else {
            this.guardarEstudiantesPorCurso();
        }
    }

    guardarEstudiantesPorCurso() {
        this.usuariosService
            .registrarEstudiantesPorCursos(this.cursosid)
            .subscribe(
                (resp) => {
                    console.log(resp);
                    this.success = resp;
                    this.loading = false;
                    this.btnActive = false;
                    this.successDatos = true;
                },
                (err) => {
                    console.log(err);
                    this.errorDatos = true;
                    this.loading = false;
                    this.error = err;
                }
            );
    }

    nextPage() {
        // this.router.navigateByUrl('index/registrar/datos/modulos');
        this.router.navigate(['index/registrar/datos/modulos']);
    }
}
