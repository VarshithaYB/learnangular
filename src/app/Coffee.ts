export class Coffee
{
    Coffeename:string;
    description: string;
    brand: string;
    qty: number;
    price: number;
    isavailable:boolean;

    constructor(Coffeename: string,description: string,brand: string,qty:number,price:number,isavailable:boolean)
    {
          this.Coffeename=Coffeename;
          this.description=description;
          this.brand=brand;
          this.qty=qty;
          this.price=price;
          this.isavailable=isavailable;
    }
    
  


}