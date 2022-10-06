import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { equalPasswordValidation } from '../helpers/equal-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false;

  // TODO: remove inputs
  public registerForm = new FormGroup({
    name: new FormControl('Chris', [Validators.required]),
    email: new FormControl('c.aranguizm@outlook.com', [Validators.email]),
    phoneNumber: new FormControl('63357624', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(8), Validators.maxLength(8)
    ]),
    password: new FormControl('1704', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(16)
    ]),
    confirmPassword: new FormControl('1704', [Validators.required]),
    terms: new FormControl(true, [Validators.required]),
  }, { validators: equalPasswordValidation });

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void { }

  createUser() {
    this.formSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService
      .createUser(this.registerForm.value)
      .subscribe({
        next: (resp) => this.router.navigateByUrl('/dashboard'),
        error: (err) => {
          Swal.fire('Error', err.error.error, 'error');
        },
      });
  }

  formValidation(input: string): boolean {
    if (this.registerForm.get(input).invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  passwordValidator() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('confirmPassword').value;
    if ((pass1 !== pass2) && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  acceptTerms() {
    return !this.registerForm.get('terms').value && this.formSubmitted;
  }

}
