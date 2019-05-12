import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authSevice:AuthenticationService) { }
  canActivate():boolean{
    return this.authSevice.isAuthenticated();
  }
}
