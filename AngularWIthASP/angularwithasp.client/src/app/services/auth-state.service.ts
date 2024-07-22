import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../models/as-is/user';
import { LoginRequest } from '../models/Authentication/login-request';
import { userKey } from '../models/Authentication/user-key';
import { Router } from '@angular/router';
import { RegistrationRequest } from '../models/Authentication/registration-request';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  constructor(private authService: AuthService, private router: Router) { }

  login(loginRequest: LoginRequest) {
    this.authService.login(loginRequest).subscribe(user => {
      if (user) {
        this.storeUser(user);
        this.router.navigate(['posts/']);
      }
    }) 
  }

  register(registrationRequest: RegistrationRequest) {
    this.authService.register(registrationRequest).subscribe(user => {
      if (user) {
        this.storeUser(user);
        this.router.navigate(['posts/']);
      }
    });
  }

  storeUser(user: User) {
    localStorage.setItem(userKey, JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(userKey);
    this.router.navigate(['/']);
  }
}
