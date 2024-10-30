import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {



  products:Product[]=[];
  product: Product=new Product(0,'','',0,0);
  constructor(private service: DataService)
  {

  }
  ngOnInit(): void {
    this.addProduct();
    
  }

  fetchAllProducts():void{
    this.service.fetchAllProducts().subscribe((data)=>{
      this.product=data;
    })
  }

addProduct():void{
  this.service.addProduct(new Product(101,'Laptop','Dell',10,75000)).subscribe((data)=>{
    this.product=data;
  })
}

// deleteProduct(Productid:number):void{
//   this.service.deleteProduct(Productid).subscribe((ProductId)=>{
//     this.products.filter(product=>Productid !=Product.productId)});
// }
deleteProduct(ProductId: number): void {
  this.service.deleteProduct(ProductId).subscribe(() => {
    this.products = this.products.filter(product => ProductId !== product.productId);
  });
}



}
