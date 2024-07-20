import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/as-is/post';
import { Observable } from 'rxjs';
import { CreatePostRequest } from '../models/post/create-post-request';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string = 'http://localhost:5200/api/v1/post';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  create(createPostRequest: CreatePostRequest): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, createPostRequest);
  }

  delete(id: string) : Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
