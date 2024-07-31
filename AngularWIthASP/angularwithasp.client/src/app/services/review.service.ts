import { Injectable } from '@angular/core';
import { Review } from '../models/as-is/review';
import { CreateReviewRequest } from '../models/review/create-review-request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  baseUrl: string = 'http://localhost:5200/api/v1/post/';

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

///TODO
//reviewcontroller merge u post controller i na front i na back
//dovrsiti sve sto se tice store za review i implementirati sve stranice vezane za review
//kada se sve zavrsi malo pregledati back i front i ispraviti nekonvencionalne stvari
