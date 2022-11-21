import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoadUsers } from './users-loading.interface';
import { User } from '../../models/user.model';

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

  loadUsers(limit: number = 10, page: number = 1) {
    const url = `${url_base}/user?limit=${limit}&page=${page}`;
    return this.httpClient.get<LoadUsers>(url).pipe(
      map((response) => {
        const users = response.docs.map(
          (user) =>
            new User(
              user.name,
              user.email,
              '',
              0,
              '',
              user.id,
              user.role,
              '',
              false,
              false,
              user.avatar
            )
        );
        return {
          totalDocs: response.totalDocs,
          docs: users,
          hasNextPage: response.hasNextPage,
          hasPrevPage: response.hasPrevPage,
        };
      })
    );
  }

  deleteUser(user: User) {
    console.log('🚀 debug user id', user.id);
    const url = `${url_base}/user/${user.id}`;
    return this.httpClient.delete(url);
  }
}
