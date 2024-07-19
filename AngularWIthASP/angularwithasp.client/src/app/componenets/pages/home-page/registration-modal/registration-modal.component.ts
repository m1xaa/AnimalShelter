import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationRequest } from '../../../../models/Authentication/registration-request';
import { Role } from '../../../../models/as-is/role';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrl: './registration-modal.component.css'
})
export class RegistrationModalComponent {

  @Output() cancel = new EventEmitter<void>();
  @Output() register = new EventEmitter<RegistrationRequest>();
  registrationForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  registrationClick() {
    if(!this.registrationForm.valid) 
      return;
    const request: RegistrationRequest = {
      'name': this.registrationForm.value.name,
      'surname': this.registrationForm.value.surname,
      'email': this.registrationForm.value.email,
      'username': this.registrationForm.value.username,
      'password': this.registrationForm.value.password,
      'roles': [Role.User]
    }

    this.register.emit(request);
  }

  cancelClick() {
    this.cancel.emit();
  }


}
