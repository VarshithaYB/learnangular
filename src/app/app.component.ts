import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnangular by @VarshithaYB';
  x: number =10;
  y: number =20;
  public product(): number{
    return this.x*this.y;
  }
}
