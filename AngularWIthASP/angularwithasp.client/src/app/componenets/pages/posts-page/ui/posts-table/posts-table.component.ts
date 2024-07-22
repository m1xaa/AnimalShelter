import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../../../../models/as-is/post';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrl: './posts-table.component.css'
})
export class PostsTableComponent {

  @Input() posts!: Post[];
  @Output() delete = new EventEmitter<Post>();

  onDelete(post: Post) {
    this.delete.emit(post);
  }
}
