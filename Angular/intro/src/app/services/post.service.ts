import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post/post';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  path:string="https://jsonplaceholder.typicode.com/";

  getPosts(userid:number):Observable<Post[]>{
    if(userid){
      return this.http.get<Post[]>(this.path+"posts?userId="+userid)
    }
    else{
      return this.http.get<Post[]>(this.path+"posts")
    }

  }
}
