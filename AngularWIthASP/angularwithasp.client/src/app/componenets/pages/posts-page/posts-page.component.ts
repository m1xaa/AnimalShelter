import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/as-is/post';
import { PostService } from '../../../services/post.service';
import { CreatePostRequest } from '../../../models/post/create-post-request';
import { select, Store } from '@ngrx/store';
import { addPost, loadPosts, removePost } from '../../../state/posts/post.actions';
import { selectAllPosts } from '../../../state/posts/post.selectors';
import { Observable } from 'rxjs';
import { AppState } from '../../../state/app.state';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent implements OnInit {

  posts: Observable<Post[]>;
  showCreationModal = false;
  showDeleteModal = false;
  selectedPost!: Post;

  constructor(private store: Store<AppState>, private actions: Actions, private router: Router) {
    this.posts = this.store.select(selectAllPosts);
    console.log(this.store)
    console.log(this.actions)
  }

  ngOnInit() {
    this.store.dispatch(loadPosts());
  }

  onCreatePost() {
    this.showCreationModal = true;
  }


  onDeletePost(post: Post) {
    this.selectedPost = post;
    this.showDeleteModal = true;
  }

  onCloseCreationModal() {
    this.showCreationModal = false;
  }

  onCreate(createPostRequest: CreatePostRequest) {
    this.store.dispatch(addPost({request: createPostRequest}));
    this.showCreationModal = false;
  }

  onCloseDeleteModal() {
    this.showDeleteModal = false;
  }

  onDelete() {
    this.store.dispatch(removePost({id: this.selectedPost.id}));
    this.showDeleteModal = false;
  }

  onVisitPost(post: Post) {
    this.router.navigate(['post/'], {state: {post: post}})
  }
}
