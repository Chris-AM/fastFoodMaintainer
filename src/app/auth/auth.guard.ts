import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor( 
    private readonly authService: AuthService,
    private readonly router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) {
    return this.authService
      .validateToken()
      .pipe(
        tap({
          next: (isAuthenticated) => {
            if (!isAuthenticated) {
              this.router.navigateByUrl('/login');
            }
          } 
        })
      );
  }
}
