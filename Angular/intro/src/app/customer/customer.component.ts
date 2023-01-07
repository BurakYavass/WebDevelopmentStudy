import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
    customers:Customer[] = [];
    ngOnInit(){
      this.customers=[
        {id:1,firstName:"Burak",lastName:"Yavas",age:27},
        {id:2,firstName:"Meltem",lastName:"Yavas",age:30},
        {id:3,firstName:"Monster",lastName:"Yavas",age:5}
      ]
    }
  
}
