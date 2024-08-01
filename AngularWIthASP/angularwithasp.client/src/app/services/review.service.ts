import { Injectable } from '@angular/core';
import { Review } from '../models/as-is/review';
import { CreateReviewRequest } from '../models/review/create-review-request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  baseUrl: string = 'http://localhost:5200/api/v1/post';

  constructor(private http: HttpClient) {}

  getAll(postId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}/${postId}/reviews`);
  }

  create(createReviewRequest: CreateReviewRequest, postId: string): Observable<Review> {
    return this.http.post<Review>(`${this.baseUrl}/${postId}/reviews`, createReviewRequest);
  }

  delete(postId: string, reviewId: string) : Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${postId}/reviews/${reviewId}`);
  }
}


