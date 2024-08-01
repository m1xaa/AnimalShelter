import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../../models/as-is/post';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { Observable } from 'rxjs';
import { Review } from '../../../models/as-is/review';
import { selectAllReviews } from '../../../state/reviews/review.selectors';
import { addReview, loadReviews, removeReview } from '../../../state/reviews/review.actions';
import { CreateReviewRequest } from '../../../models/review/create-review-request';
import { userKey } from '../../../models/Authentication/user-key';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css'
})
export class PostPageComponent implements OnInit {  
  post!: Post;
  showDeleteModal = false;
  reviews: Observable<Review[]>;
  selectedReview!: Review;

  constructor(private router: Router, private store: Store<AppState>) {
    if (history.state && history.state.post) {
      this.post = history.state.post;
    } 
    this.reviews = this.store.select(selectAllReviews);
  }

  ngOnInit(): void {
      this.store.dispatch(loadReviews({postId: this.post.id}));
  }

  onCreateReview(content: string) {
    var user = JSON.parse(localStorage.getItem(userKey)!);
    const request: CreateReviewRequest = {
      content: content,
      userId: user.id,
      postId: this.post.id
    }
    this.store.dispatch(addReview({request: request, postId: this.post.id}));
  }

  onDeleteReview() {
    this.store.dispatch(removeReview({postId: this.post.id, reviewId: this.selectedReview.id}));
    this.showDeleteModal = false;
  }

  onDeleteClick(review: Review) {
    this.selectedReview = review;
    this.showDeleteModal = true;
  }

  onCancelDelete() {
    this.showDeleteModal = false;
  }
}
