import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-post-modal',
  templateUrl: './delete-post-modal.component.html',
  styleUrl: './delete-post-modal.component.css'
})
export class DeletePostModalComponent {

  @Output() delete = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  cancelClick() {
    this.cancel.emit();
  }

  deleteClick() {
    this.delete.emit();
  }
}
