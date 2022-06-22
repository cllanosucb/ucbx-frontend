import { Component, OnInit } from '@angular/core';
import { Error, Success } from '../../interfaces/respuestas';
import { Router } from '@angular/router';
import { ModulosService } from '../../services/modulos.service';

@Component({
    selector: 'app-reg-modulos',
    templateUrl: './reg-modulos.component.html',
    styleUrls: ['./reg-modulos.component.scss'],
})
export class RegModulosComponent implements OnInit {
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
        private modulosService: ModulosService
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
            this.guardarModulosPorCurso();
        }
    }

    guardarModulosPorCurso() {
        this.modulosService.postModulos(this.cursosid).subscribe(
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
        // this.router.navigateByUrl('index/registrar/datos/tareas');
        this.router.navigate(['index/registrar/datos/tareas']);
    }
}
