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
    this.setError(false, '');
    this.isLoading = true;

    if (this.email === '' || this.password === '') {
      this.setError(true, "Niet alle velden zijn ingevuld");
      this.error.isError = true;
    }

    this.login();
  }

  setError(isError: boolean, message: String): void {
      this.error.isError = isError;
      this.error.message = message;
  }

  login() {

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
