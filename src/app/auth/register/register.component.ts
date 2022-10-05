import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { equalPasswordValidation } from '../helpers/equal-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false;

  public registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(8), Validators.maxLength(8)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(16)
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
    terms: new FormControl(true, [Validators.required]),
  }, { validators: equalPasswordValidation });

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void { }

  createUser() {
    this.formSubmitted = true;
    console.log('debug register form value', this.registerForm.value);
    if (this.registerForm.valid) {
      console.log('posting form');
    } else {
      console.log('form not valid');
    }
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
