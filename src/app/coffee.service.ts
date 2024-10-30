import { Injectable } from '@angular/core';
import { Coffee } from './Coffee';
@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  
  private coffee: Coffee[]=[];
  

  constructor()
  {
    this.coffee.push(new Coffee("GoodCoffee", "Strong", "Bru", 1, 120, true));
    this.coffee.push(new Coffee("CoffeeDay", "Light", "Nestle", 1, 100, true));
    this.coffee.push(new Coffee("Asha Coffee", "Strong", "Sunrise", 1, 160, true));
    this.coffee.push(new Coffee("Indian Chai", "Medium", "Bru", 1, 190, true));

  }
  public getCoffee():Coffee[]
  {
      return this.coffee;
  }
  
}
