import { Component, OnInit } from '@angular/core';
import { Error } from '../../../shared/models/error.model';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  error: Error = {
    isError: false,
    message: ''
  }

  isLoading: boolean = false;
  email: String = '';
  password: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.error.isError = false;
  }

  setEmail(email: String) {
    this.email = email;
  }

  setPassword(password: String) {
    this.password = password;
  }

  closeError(isError: boolean) {
    this.error.isError = isError;
  }

}
