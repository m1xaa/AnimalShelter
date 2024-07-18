import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginRequest } from '../../../../models/Authentication/login-request';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {

  @Output() login = new EventEmitter<LoginRequest>();
  @Output() cancel = new EventEmitter<void>();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  loginClick() {
    if (!this.loginForm.valid) 
      return;
    const loginRequest = {
      'username': this.loginForm.value.username,
      'password': this.loginForm.value.password,
    }
    this.login.emit(loginRequest);
  }

  cancelClick() {
    this.cancel.emit();
  }
}
