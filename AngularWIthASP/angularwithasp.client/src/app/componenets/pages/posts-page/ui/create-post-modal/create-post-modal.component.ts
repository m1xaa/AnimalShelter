import { Component, EventEmitter, Output } from '@angular/core';
import { CreatePostRequest } from '../../../../../models/post/create-post-request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userKey } from '../../../../../models/Authentication/user-key';
import { User } from '../../../../../models/as-is/user';

@Component({
  selector: 'app-create-post-modal',
  templateUrl: './create-post-modal.component.html',
  styleUrl: './create-post-modal.component.css'
})
export class CreatePostModalComponent {

  @Output() create = new EventEmitter<CreatePostRequest>();
  @Output() cancel = new EventEmitter<void>();

  createPostForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createPostForm = this.fb.group({
      specie: ['', Validators.required],
      age: ['', Validators.required],
      condition: ['', Validators.required]
    });
  }

  cancelClick() {
    this.cancel.emit();
  }

  createClick() {
    if(!this.createPostForm.valid) 
      return;
    var user: User = JSON.parse(localStorage.getItem(userKey)!)
    const request: CreatePostRequest = {
      'age': this.createPostForm.value.age,
      'specie': this.createPostForm.value.specie,
      'condition': this.createPostForm.value.condition,
      'userId': user.id,
    }
    this.create.emit(request);
  }
}
