import { Component } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-reactive2',
  templateUrl: './reactive2.component.html',
  styleUrls: ['./reactive2.component.css']
})
export class Reactive2Component {

  product: Product=new Product(0,'','',0,0);

  onSubmit()
  {
    console.warn(this.product);
  }

}
