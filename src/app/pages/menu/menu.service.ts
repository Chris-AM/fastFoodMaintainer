import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getMenus(){
    const url = `${base_url}/menu`;
    return this.httpClient.get(url);
  }
}
