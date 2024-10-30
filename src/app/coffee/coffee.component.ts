import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service'; 
import { Coffee } from '../Coffee';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {
  qty: number = 1;
  CoffeeList: Coffee[] = [];  
  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.CoffeeList = this.coffeeService.getCoffee();  
  }

  placeOrder(): void {
    console.log('Order placed with quantity: ', this.qty);
  }
}
