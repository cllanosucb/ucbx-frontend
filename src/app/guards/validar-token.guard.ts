import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.validarToken()
            .pipe(
              tap( valid => {
                if(!valid)
                  this.router.navigateByUrl('/auth/login');
              })
            );
  }
  
  canLoad(): Observable<boolean> | boolean {
    return this.authService.validarToken()
            .pipe(
              tap( valid => {
                if(!valid)
                  this.router.navigateByUrl('/auth/login');
              })
            );
  }

}
