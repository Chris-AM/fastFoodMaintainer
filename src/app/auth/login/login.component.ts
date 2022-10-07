import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl(
      localStorage.getItem('email') || '',
      [Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(16)
    ]),
    remember: new FormControl(false),
  });

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        if (this.loginForm.get('remember').value) {
          localStorage.setItem('email', data.user.email);
        } else {
          localStorage.removeItem('email');
        }
        this.router.navigateByUrl('');
      },
      error: (err:any) => Swal.fire('error', err.error.error, 'error'),
    });
  }
}
