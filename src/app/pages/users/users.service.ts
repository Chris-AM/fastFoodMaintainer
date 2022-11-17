import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoadUsers } from './users-loading.interface';

const url_base = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  get token() {
    return localStorage.getItem('token');
  }
  get headers() {
    return {
      headers: {
        'x-token': this.token,
      },
    };
  }
  constructor(private readonly httpClient: HttpClient) {}

  loadUsers(limit: number = 5) {
    const url = `${url_base}/user?limit=${limit}`;
    console.log('🚀 debug headers', this.headers);
    return this.httpClient.get<LoadUsers>(url);
  }
}
