import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '@core/services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardHandler implements CanActivate {

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
  ) {}

  canActivate(): boolean {
    if (!this.authenticationService.currentUserValue) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
