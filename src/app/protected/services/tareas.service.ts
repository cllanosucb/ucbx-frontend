import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Error, Success } from '../interfaces/respuestas';

@Injectable({
    providedIn: 'root',
})
export class TareasService {
    private apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) {}

    postTareas(cursosId: number[]): Observable<Success> {
        const url = `${this.apiUrl}/tareas/guardar`;
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
