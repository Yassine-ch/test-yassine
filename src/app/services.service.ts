import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
    new Post('1', 'Post 1', 'Content of post 1'),
    new Post('2', 'Post 2', 'Content of post 2'),
    new Post('3', 'Post 3', 'Content of post 3'),
    new Post('4', 'Post 4', 'Content of post 4')
  ];

  getPosts() {
    return this.posts;
  }
}