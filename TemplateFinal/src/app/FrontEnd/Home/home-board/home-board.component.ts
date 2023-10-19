import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-board',
  templateUrl: './home-board.component.html',
  styleUrls: ['./home-board.component.scss']
})
export class HomeBoardComponent {
  likesCount = 123;
  newComment = '';
  comments = [
    {
      author: 'Jane Smith',
      content: 'Great post!',
      profilePic: 'path_to_jane_pic.jpg'
    },
    // ... more comments
  ];

  likePost() {
    // Logic to like the post (and potentially update the backend)
    this.likesCount++;
  }

  commentOnPost() {
    // Logic to show a comment box or something similar
  }

  addComment() {
    // Add new comment to the comments array (and potentially update the backend)
    this.comments.push({
      author: 'Current User',
      content: this.newComment,
      profilePic: 'path_to_current_user_pic.jpg'
    });
    this.newComment = '';
  }
}