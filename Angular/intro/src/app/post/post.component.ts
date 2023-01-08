import { Component } from '@angular/core';
import { Post } from './post';
import { User} from './user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { PostService } from '../services/post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]
})
export class PostComponent {
  constructor(
    private http:HttpClient,
    private activatedRoute : ActivatedRoute,
    private alertifyService: AlertifyService,
    private postService:PostService
  ){}
  path:string="https://jsonplaceholder.typicode.com/"
  posts: Post[] = [];
  users: User[] = [];
  limit:number = 10;
  

  ngOnInit(): void{
     this.getUsers();
     
     this.activatedRoute.params.subscribe(params=>{
      this.getPosts(params["userid"]);
     })
  }

  getPosts(userid:number){
    this.postService.getPosts(userid).subscribe(data=>{
      this.posts = data
    })
  }

  getUsers(){
    this.http.get<User[]>(this.path+"users").subscribe(response =>{
      this.users = response;
    })
  }

  addToFavorites(post:any){
    this.alertifyService.error("added of favs :" +post.title)
  }


}
