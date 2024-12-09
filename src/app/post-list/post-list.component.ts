import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';  // Import HttpClientModule and HttpClient

@Component({
  selector: 'app-post-list',
  standalone: true,  // Indicating this is a standalone component
  imports: [CommonModule, HttpClientModule],  // Import HttpClientModule here
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: any[] = [];  // Array to hold posts

  constructor(private http: HttpClient) {}  // Inject HttpClient for HTTP requests

  ngOnInit() {
    // Make HTTP GET request to fetch posts
    this.http.get<any[]>('http://localhost:3000/postList').subscribe(
      data => {
        this.posts = data;  // Assign fetched data to posts array
      },
      error => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}
