import { Component } from '@angular/core';
import { AuthStateService } from '../../../services/auth-state.service';
import { LoginRequest } from '../../../models/Authentication/login-request';
import { RegistrationRequest } from '../../../models/Authentication/registration-request';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  showLoginModal = false;
  showRegistrationModal = false;

  constructor(private authState: AuthStateService) {}

  onLogin(loginRequest: LoginRequest) {
    this.authState.login(loginRequest);
  }

  onCancelLogin() {
    this.showLoginModal = false; 
  }

  onRegistration(registerRequest: RegistrationRequest) {
    this.authState.register(registerRequest);
  }

  onCancelRegistration() {
    this.showRegistrationModal = false;
  }

  onShowLoginModal() {
    this.showLoginModal = true;
  }

  onShowRegistrationModal() {
    this.showRegistrationModal=true;
  }

  onLogout() {
    this.authState.logout();
  }
}
