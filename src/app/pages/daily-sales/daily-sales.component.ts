import { Component } from '@angular/core';

@Component({
  selector: 'app-daily-sales',
  templateUrl: './daily-sales.component.html',
  styleUrls: ['./daily-sales.component.css']
})
export class DailySalesComponent {
  product1: number = 10;
  product2: number = 15;

  get getProduct1() {
    return `${ this.product1 }%`;
  }

  get getProduct2() {
    return `${ this.product2 }%`;
  }
  
}
