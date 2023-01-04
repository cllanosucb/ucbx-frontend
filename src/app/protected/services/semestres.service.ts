import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Error, Success } from '../interfaces/respuestas';
import { Semestres } from '../interfaces/semestres';

@Injectable({
    providedIn: 'root',
})
export class SemestresService {
    private apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getSemestresActivos(): Observable<Semestres> {
        const url = `${this.apiUrl}/semestres/activos`;
        const headers = new HttpHeaders().set(
            'token',
            localStorage.getItem('token') || ''
        );
        return this.http.get<Semestres>(url, { headers }).pipe(
            map((resp) => {
                return resp;
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
