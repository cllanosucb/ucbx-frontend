import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Error, Success } from '../../interfaces/respuestas';
import { TareasService } from '../../services/tareas.service';

@Component({
    selector: 'app-reg-tareas',
    templateUrl: './reg-tareas.component.html',
    styleUrls: ['./reg-tareas.component.scss'],
})
export class RegTareasComponent implements OnInit {
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

    constructor(private router: Router, private tareasService: TareasService) {}

    ngOnInit(): void {
        this.verificarDatos();
    }

    verificarDatos() {
        this.cursosid = JSON.parse(localStorage.getItem('cursosid') || null);
        if (this.cursosid == null) {
            this.errorDatos = true;
            this.loading = false;
        } else {
            this.guardarTareasPorCurso();
        }
    }

    guardarTareasPorCurso() {
        this.tareasService.postTareas(this.cursosid).subscribe(
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
        // this.router.navigateByUrl('index/registrar/datos/calificaciones');
        this.router.navigate(['index/registrar/datos/calificaciones']);
    }
}
