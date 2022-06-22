import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { Cursos, Datum, CursoAPI, ConvertData } from '../../interfaces/cursos';
import { Error } from '../../interfaces/respuestas';
import { CursosService } from '../../services/cursos.service';

@Component({
    selector: 'app-cursos',
    templateUrl: './cursos.component.html',
    styleUrls: ['./cursos.component.scss'],
    providers: [MessageService]
})
export class CursosComponent implements OnInit {
    
    cursos: Datum[];
    selectedCursos: Datum[];
    loading: boolean = true;
    msgs: Message[] = [];

    constructor(
        private cursosService: CursosService,
        private router: Router,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.getCursosUcbonline();
    }

    getCursosUcbonline() {
        this.cursosService.getCursos()
            .subscribe(resp => {
                console.log(resp);
                this.loading = false;
                this.cursos = resp.data;
            }, err => {
                this.loading = false;
                this.errorApi(err)
            });
    }

    errorApi(error: Error) {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: error.error.msg });
    }

    selectItem() {
        console.log("this.selectedCursos", this.selectedCursos);        
        if(this.selectedCursos.length > 4) {
            this.messageService.add({severity:'error', summary: 'Error', detail: 'Debe seleccionar maximo 4 cursos'});
        } else {
            this.cursosService.postCursosTransformado(this.selectedCursos);           
            this.router.navigateByUrl('index/registrar/datos/cursos');
        }
    }

}
