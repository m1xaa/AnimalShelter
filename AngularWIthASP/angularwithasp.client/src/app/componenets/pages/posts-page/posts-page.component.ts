import { Component } from '@angular/core';
import { Post } from '../../../models/as-is/post';
import { PostService } from '../../../services/post.service';
import { CreatePostRequest } from '../../../models/post/create-post-request';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent {

  posts: Post[] = [];
  showCreationModal = false;
  showDeleteModal = false;
  selectedPost!: Post;

  constructor(private postService: PostService){
    this.postService.getAll().subscribe(data => {
      if (data) {
        this.posts = data;
      }
    });
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
    console.log(createPostRequest);
    this.postService.create(createPostRequest).subscribe(data => {
      if (data) {
        this.posts = [...this.posts, data];
      }
    });
    this.showCreationModal = false;
  }

  onCloseDeleteModal() {
    this.showDeleteModal = false;
  }

  onDelete() {
    this.postService.delete(this.selectedPost.id).subscribe(data => {
      const index = this.posts.findIndex(p => p.id === this.selectedPost.id);
      this.posts.splice(index, 1);
    });
    this.showDeleteModal = false;
  }
}
