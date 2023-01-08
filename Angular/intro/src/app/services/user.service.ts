import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../post/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  path:string = "https://jsonplaceholder.typicode.com/";
  
  getUsers(id:number):Observable<User[]>{
    if(id){
      return this.http.get<User[]>(this.path+"users?id="+id)
    }
    else{
      return this.http.get<User[]>(this.path+"users")
    }
    
  }
}
