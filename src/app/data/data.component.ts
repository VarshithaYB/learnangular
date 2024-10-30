import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Product } from '../Product';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit{

  productId: number =1456
  Description: string ="iPhone15"
  brand:string ="Apple"
  price: number=156000.0
  isavailable: boolean=true
  orderedQty: number =0
  availableQty: number =100
  isMember : boolean = false
  freeShipping : string="green"
  isButtonEnabled: boolean=false
  products: any[] =[
    {"productId":101,"description":"Foldable Mobile","brand":"Samsung","availableQty":200,"price":60000,"freeShipping":"green"},
    {"productId":102,"description":"Foldable Mobile","brand":"Samsung","availableQty":200,"price":60000,"freeShipping":"green"},
    {"productId":103,"description":"Foldable Mobile","brand":"Samsung","availableQty":200,"price":60000,"freeShipping":"green"},
    {"productId":104,"description":"Foldable Mobile","brand":"Samsung","availableQty":200,"price":60000,"freeShipping":"green"},
    {"productId":105,"description":"Foldable Mobile","brand":"Samsung","availableQty":200,"price":60000,"freeShipping":"green"},
    {"productId":106,"description":"Foldable Mobile","brand":"Samsung","availableQty":200,"price":60000,"freeShipping":"green"},
    {"productId":107,"description":"Foldable Mobile","brand":"Samsung","availableQty":200,"price":60000,"freeShipping":"green"}
    

    
  ];


  products2: Product[]=[];
    constructor(private service: DataService){}


  ngOnInit(): void {
    this.getProducts();
  }

    public getProducts(): void
    {
      this.products2=this.service.getProducts();
    }
  

  public placeOrder(): void{
    if(this.orderedQty<this.availableQty)
    {
       this.isavailable=true
       console.log("Order recieved",this.orderedQty)
    }
    else
    {
       this.isavailable=false
       console.log("Order exceeded limit")
    
  }
}

}

