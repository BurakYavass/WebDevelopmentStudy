import { Component } from '@angular/core';
import { Post } from './post';
import { User} from './user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(private http:HttpClient, private activatedRoute : ActivatedRoute){

  }
  path:string="https://jsonplaceholder.typicode.com/"
  posts: Post[] = [];
  users: User[] = [];
  limit:number = 10;
  

  ngOnInit(): void{
     this.getUsers();

     this.activatedRoute.params.subscribe(params=>{
      this.getPosts(params["userid"]);
      console.log(params["userid"])
     })
  }

  getPosts(userid :number){
    if(userid){
      this.http.get<Post[]>(this.path+"posts?userId="+userid).subscribe(response =>{
        this.posts = response;
      });
    }
    else{
      this.http.get<Post[]>(this.path+"posts").subscribe(response =>{
        this.posts = response;
      });
    }

  }

  getUsers(){
    this.http.get<User[]>(this.path+"users").subscribe(response =>{
      this.users = response;
    })
  }
}
