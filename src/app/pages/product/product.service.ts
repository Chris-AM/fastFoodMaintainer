import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getProducts() {
    const url = `${base_url}/product`;
    return this.httpClient.get(url);
  }
}
