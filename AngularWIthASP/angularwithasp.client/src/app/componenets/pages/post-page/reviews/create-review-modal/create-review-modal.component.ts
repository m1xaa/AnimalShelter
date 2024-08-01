import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-review-modal',
  templateUrl: './create-review-modal.component.html',
  styleUrl: './create-review-modal.component.css'
})
export class CreateReviewModalComponent {

  @Output() create = new EventEmitter<string>();
  createReviewForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createReviewForm = this.fb.group({
      content: ['', Validators.required]
    })
  }
  
  createClick() {
    if (!this.createReviewForm.valid) 
      return;
    this.create.emit(this.createReviewForm.value.content);
    this.createReviewForm.reset();
  }
}
