import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.electron';
import { registerInterface } from './register/register.interface';
import { LoginInterface } from './login/login.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpClient: HttpClient) { }

  createUser( formData: registerInterface ) {
    return this.httpClient.post(`${base_url}/auth/maintainer/register`, formData);
  }

  login( formData: LoginInterface ) {
    return this.httpClient.post(`${base_url}/auth/login`,  formData);
  }
}
