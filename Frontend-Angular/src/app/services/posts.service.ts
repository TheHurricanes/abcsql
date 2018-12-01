import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:Http) { }
  getAllPosts() {
    return this.http.get('http://localhost:3000/posts').pipe(map(res => res.json()));
  }
  getmyPosts(user) {
    
  }
  createPost(post) {

  }
  updatePost(postId,post) {

  }
  deletePost(postId){

  }

}
