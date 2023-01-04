import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

import { Usuario } from '../interfaces/usuarios';
import { Error, Success } from '../interfaces/respuestas';

@Injectable({
    providedIn: 'root',
})
export class UsuariosService {
    private apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getUsuario(): Observable<Usuario> {
        const url = `${this.apiUrl}/usuarios/portoken`;
        const headers = new HttpHeaders().set(
            'token',
            localStorage.getItem('token') || ''
        );
        return this.http.get<Usuario>(url, { headers }).pipe(
            map((resp) => {
                return resp;
            }),
            catchError(this.handleError)
        );
    }

    registrarEstudiantesPorCursos(cursosId: number[]): Observable<Success> {
        const url = `${this.apiUrl}/usuarios/registarporcursos`;
        const headers = new HttpHeaders().set(
            'token',
            localStorage.getItem('token') || ''
        );
        return this.http.post<Success>(url, cursosId, { headers }).pipe(
            catchError(this.handleError),
            map((data: Success) => {
                return data;
            })
        );
    }

    registrarDocentesPregrado(id_semestre, id_regional): Observable<Success> {
        const url = `${this.apiUrl}/usuarios/crearDocentesPregrado`;
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

    asignarParalelosDocentesPregrado(
        id_semestre,
        id_regional
    ): Observable<Success> {
        const url = `${this.apiUrl}/usuarios/asignarParalelosDocentesPregrado`;
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

    registrarEstudiantesPregrado(
        id_semestre,
        id_regional
    ): Observable<Success> {
        const url = `${this.apiUrl}/usuarios/crearEstudiantesPregrado`;
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

    retirarEstudiantesPregrado(id_semestre, id_regional): Observable<Success> {
        const url = `${this.apiUrl}/usuarios/retirosEstudiantesPregrado`;
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

    inscripcionesEstudiantesPregradoCsv(
        id_semestre,
        id_regional
    ): Observable<Success> {
        const url = `${this.apiUrl}/usuarios/inscripcionesEstudiantesPregradoCsv`;
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

    inscripcionesEstudiantesPregrado(
        id_semestre,
        id_regional
    ): Observable<Success> {
        const url = `${this.apiUrl}/usuarios/inscripcionesEstudiantesPregrado`;
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

    registrarDocentesPracticasPregrado(
        id_semestre,
        id_regional
    ): Observable<Success> {
        console.log('crearDocentesPracticasPregrado');
        const url = `${this.apiUrl}/usuarios/crearDocentesPracticasPregrado`;
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

    asignarParalelosDocentesPracticasPregrado(
        id_semestre,
        id_regional
    ): Observable<Success> {
        const url = `${this.apiUrl}/usuarios/asignarParalelosPracticasDocentesPregrado`;
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

    registrarEstudiantesPregradoPracticas(
        id_semestre,
        id_regional
    ): Observable<Success> {
        const url = `${this.apiUrl}/usuarios/crearEstudiantesPregradoPractica`;
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

    retirarEstudiantesPregradoPracticas(
        id_semestre,
        id_regional
    ): Observable<Success> {
        const url = `${this.apiUrl}/usuarios/retirosEstudiantesPracticasPregrado`;
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

    inscripcionesEstudiantesPregradoPracticas(
        id_semestre,
        id_regional
    ): Observable<Success> {
        const url = `${this.apiUrl}/usuarios/inscripcionesPracticasEstudiantesPregrado`;
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
