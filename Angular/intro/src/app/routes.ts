import { Routes } from "@angular/router";
import { PostComponent } from "./post/post.component";
import { CustomerComponent } from "./customer/customer.component";

export const routes:Routes=[
    {path:"posts", component:PostComponent},
    {path:"", redirectTo:"posts",pathMatch:"full"},
    {path:"customers", component:CustomerComponent},
    {path:"posts/:userid",component:PostComponent}
]