import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError, Observable, map, catchError } from 'rxjs';

import { ConvertData, CursoAPI, Cursos, Datum } from '../interfaces/cursos';
import { Error, Success } from '../interfaces/respuestas';

@Injectable({
    providedIn: 'root',
})
export class CursosService {
    private apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getCursos(): Observable<Cursos> {
        const url = `${this.apiUrl}/cursos/lista`;
        const headers = new HttpHeaders().set(
            'token',
            localStorage.getItem('token') || ''
        );
        return this.http.get<Cursos>(url, { headers }).pipe(
            map((resp) => {
                return resp;
            }),
            catchError(this.handleError)
        );
    }

    postCursosTransformado(lista: Datum[]) {
        let convertData = new ConvertData();
        const listaCurso = convertData.transformToCursosAPI(lista);
        const listaCursoId = convertData.transformToIdCursos(lista);
        localStorage.setItem('cursosapi', JSON.stringify(listaCurso));
        localStorage.setItem('cursosid', JSON.stringify(listaCursoId));
    }

    postCursos(cursosApi: CursoAPI[]): Observable<Success> {
        const url = `${this.apiUrl}/cursos/guardar`;
        const headers = new HttpHeaders().set(
            'token',
            localStorage.getItem('token') || ''
        );
        return this.http.post<Success>(url, cursosApi, { headers }).pipe(
            catchError(this.handleError),
            map((data: Success) => {
                return data;
            })
        );
    }

    subirArchivoPregrado(formData): Observable<Success> {
        const url = `${this.apiUrl}/subir/excelPregrado`;
        const headers = new HttpHeaders().set(
            'token',
            localStorage.getItem('token') || ''
        );
        return this.http.put<Success>(url, formData, { headers }).pipe(
            catchError(this.handleError),
            map((data: Success) => {
                return data;
            }),
            catchError(this.handleError)
        );
    }

    crearPlantillasPregrado(id_semestre, id_regional): Observable<Success> {
        const url = `${this.apiUrl}/cursos/crearPlantillasPregrado`;
        const headers = new HttpHeaders().set(
            'token',
            localStorage.getItem('token') || ''
        );
        const body = { id_semestre, id_regional };
        return this.http.post<Success>(url, body, { headers }).pipe(
            catchError(this.handleError),
            map((data: Success) => {
                return data;
            })
        );
    }

    crearParalelosPregrado(id_semestre, id_regional): Observable<Success> {
        const url = `${this.apiUrl}/cursos/crearParalelosPregrado`;
        const headers = new HttpHeaders().set(
            'token',
            localStorage.getItem('token') || ''
        );
        const body = { id_semestre, id_regional };
        return this.http.post<Success>(url, body, { headers }).pipe(
            catchError(this.handleError),
            map((data: Success) => {
                return data;
            })
        );
    }

    subirArchivoInscPregrado(formData): Observable<Success> {
        const url = `${this.apiUrl}/subir/excelPregradoInscripciones`;
        const headers = new HttpHeaders().set(
            'token',
            localStorage.getItem('token') || ''
        );
        return this.http.put<Success>(url, formData, { headers }).pipe(
            catchError(this.handleError),
            map((data: Success) => {
                return data;
            }),
            catchError(this.handleError)
        );
    }

    subirArchivoInscPregradoPrueba(formData): Observable<Success> {
        const url = `${this.apiUrl}/subir/excelPregradoInscripcionesPrueba`;
        const headers = new HttpHeaders().set(
            'token',
            localStorage.getItem('token') || ''
        );
        return this.http.put<Success>(url, formData, { headers }).pipe(
            catchError(this.handleError),
            map((data: Success) => {
                return data;
            }),
            catchError(this.handleError)
        );
    }

    subirArchivoPracticasPregrado(formData): Observable<Success> {
        const url = `${this.apiUrl}/subir/excelPregradoPracticas`;
        const headers = new HttpHeaders().set(
            'token',
            localStorage.getItem('token') || ''
        );
        return this.http.put<Success>(url, formData, { headers }).pipe(
            catchError(this.handleError),
            map((data: Success) => {
                return data;
            }),
            catchError(this.handleError)
        );
    }

    crearPlantillasPracticasPregrado(
        id_semestre,
        id_regional
    ): Observable<Success> {
        const url = `${this.apiUrl}/cursos/crearPlantillasPracticasPregrado`;
        const headers = new HttpHeaders().set(
            'token',
            localStorage.getItem('token') || ''
        );
        const body = { id_semestre, id_regional };
        return this.http.post<Success>(url, body, { headers }).pipe(
            catchError(this.handleError),
            map((data: Success) => {
                return data;
            })
        );
    }

    crearParalelosPracticasPregrado(
        id_semestre,
        id_regional
    ): Observable<Success> {
        const url = `${this.apiUrl}/cursos/crearParalelosPracticasPregrado`;
        const headers = new HttpHeaders().set(
            'token',
            localStorage.getItem('token') || ''
        );
        const body = { id_semestre, id_regional };
        return this.http.post<Success>(url, body, { headers }).pipe(
            catchError(this.handleError),
            map((data: Success) => {
                return data;
            })
        );
    }

    subirArchivoInscPracticasPregrado(formData): Observable<Success> {
        const url = `${this.apiUrl}/subir/excelPregradoInscripcionesPracticas`;
        const headers = new HttpHeaders().set(
            'token',
            localStorage.getItem('token') || ''
        );
        return this.http.put<Success>(url, formData, { headers }).pipe(
            catchError(this.handleError),
            map((data: Success) => {
                return data;
            }),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            const err: Error = {
                ok: false,
                error: {
                    msg: 'No tienes conexión a internet',
                    err: null,
                },
            };
            return throwError(err);
        } else {
            return throwError(error.error);
        }
    }
}
