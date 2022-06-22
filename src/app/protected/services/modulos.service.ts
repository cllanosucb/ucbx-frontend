import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Error, Success } from '../interfaces/respuestas';

@Injectable({
    providedIn: 'root',
})
export class ModulosService {
    private apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) {}

    postModulos(cursosId: number[]): Observable<Success> {
        const url = `${this.apiUrl}/modulos/guardar`;
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
