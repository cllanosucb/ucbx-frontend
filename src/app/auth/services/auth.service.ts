import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Error, Login } from '../interfaces/interfaces';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  login(usuario: string, clave: string): Observable<Login> {
    const url = `${this.apiUrl}/login`;
    const body = {usuario, clave};
    return this.http.post<Login>(
      url, 
      body)
      .pipe(
        catchError(this.handleError),
        map((data: Login) => {
          localStorage.setItem('token', data.data.token);
          return data;
        })
      );
  }

  validarToken(): Observable<boolean> {
    const url = `${this.apiUrl}/login/renovar`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.get<Login>(url, {headers})
      .pipe(
        map( resp => {
          localStorage.setItem('token', resp.data.token);
          return resp.ok;
        }),
        catchError((err) => of(false)),
      );
  }

  logout() {
    localStorage.clear();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      const err: Error = {
        mensajes: [
          {
            tipo: 'error',
            descripcion: 'No tienes conexión a internet'
          }
        ]
      };
      return throwError(err);
    } else {
      return throwError(error.error);
    }
  }  

}
