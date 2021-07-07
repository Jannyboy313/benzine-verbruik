import { Component, OnInit } from '@angular/core';
import { FormInputComponent } from '../form-input/form-input.component';
import { ErrorSpanComponent } from 'src/shared/components/error-span/error-span.component';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  isError: boolean = false;
  isLoading: boolean = false;
  email: String = '';
  password: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

  setEmail(email: String) {
    this.email = email;
  }

  setPassword(password: String) {
    this.password = password;
  }

  closeError(isError: boolean) {
    this.isError = isError;
  }

}
