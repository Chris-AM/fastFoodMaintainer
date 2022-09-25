import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent {

  product1: number = 10;
  product2: number = 15;

  get getProduct1() {
    return `${ this.product1 }%`;
  }

  get getProduct2() {
    return `${ this.product2 }%`;
  }
 }
