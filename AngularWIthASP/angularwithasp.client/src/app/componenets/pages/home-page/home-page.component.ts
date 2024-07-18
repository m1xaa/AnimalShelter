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
  showLoginModal = true;
  showRegistrationModal = false;

  constructor(private authState: AuthStateService) {}

  onLogin(loginRequest: LoginRequest) {}

  onCancelLogin() {}

  onRegistration(registerRequest: RegistrationRequest) {}

  onCancelRegistration() {}

  onShowLoginModal() {}

  onShowRegistrationModal() {}

  onLogout() {}
}
