import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Review } from '../../../../../models/as-is/review';
import { Observable } from 'rxjs';
import { userKey } from '../../../../../models/Authentication/user-key';

@Component({
  selector: 'app-review-display',
  templateUrl: './review-display.component.html',
  styleUrl: './review-display.component.css'
})
export class ReviewDisplayComponent {
  @Input() reviews!: Observable<Review[]>;
  @Output() delete = new EventEmitter<Review>();

  deleteClick(review: Review) {
    this.delete.emit(review);
  }

  isSameUser(review: Review) {
    var user = JSON.parse(localStorage.getItem(userKey)!);
    return user.id === review.user.id;
  }
}
