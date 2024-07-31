import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../../models/as-is/post';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css'
})
export class PostPageComponent {
  post!: Post;
  showDeleteModal = false;

  constructor(private router: Router) {
    if (history.state && history.state.post) {
      this.post = history.state.post;
    } 
  }
}
