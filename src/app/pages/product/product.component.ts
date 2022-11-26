import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Products } from '../../models/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {

  public products: Products[]

  constructor(
    private readonly productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe({
      next: (products: Products[]) => {
        this.products = products;
      }
    })
  }
}
