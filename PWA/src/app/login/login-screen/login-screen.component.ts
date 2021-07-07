import { Component, OnInit } from '@angular/core';
import { Error } from '../../../shared/models/error.model';
import { UserService } from 'src/shared/Services/db/user.service';

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.setError(false, '');
    this.isLoading = true;

    if (this.email === '' || this.password === '') {
      this.setError(true, "Niet alle velden zijn ingevuld");
      this.error.isError = true;
    } else {
      this.login();
    }

  }

  setError(isError: boolean, message: String): void {
      this.error.isError = isError;
      this.error.message = message;
  }

  login() {
    this.userService.login(this.email, this.password)
    .subscribe(
      () => {
        this.isLoading = false;
        // navigate to homescreen
        // Store user login information (id)
        // Create guard
      },
      () => {
        this.isLoading = false;
        this.setError(true, "Email or password is incorrect");
      }
    )
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
