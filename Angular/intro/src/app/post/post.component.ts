import { Component } from '@angular/core';
import { Post } from './post';
import { User} from './user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService,UserService]
})
export class PostComponent {
  constructor(
    
    private activatedRoute : ActivatedRoute,
    private alertifyService: AlertifyService,
    private postService:PostService,
    private userService:UserService,
    
  ){}
  
  posts: Post[] = [];
  users: User[] = [];
  favoritePosts = [];
  filterText!:string;
  today : Date = new Date();
 

  ngOnInit(): void{
     this.activatedRoute.params.subscribe(params2 =>{
      this.getUsers(params2["id"]);
     }) 

     this.activatedRoute.params.subscribe(params=>{
      this.getPosts(params["userid"]);
     })
  }

  getPosts(userid:number){
    this.postService.getPosts(userid).subscribe(data=>{
      this.posts = data
    })
  }

  getUsers(id:number){
    this.userService.getUsers(id).subscribe(data =>{
      this.users = data;
    })
  }

  addToFavorites(post:any){
    this.alertifyService.success("added of favs :" +post.title)
  }


}
