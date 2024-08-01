import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Review } from '../../../../../models/as-is/review';

@Component({
  selector: 'app-delete-review-modal',
  templateUrl: './delete-review-modal.component.html',
  styleUrl: './delete-review-modal.component.css'
})
export class DeleteReviewModalComponent {

  @Input() review!: Review;
  @Output() delete = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  cancelClick() {
    this.cancel.emit();
  }

  deleteClick() {
    this.delete.emit();
  }
}
