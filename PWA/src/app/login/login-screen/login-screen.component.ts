import { Component, OnInit } from '@angular/core';
import { Error } from '../../../shared/models/error.model';
import { UserService } from 'src/shared/Services/db/user.service';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/shared/Services/data-storage.service';

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
  email: string = '';
  password: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private dataStorageService: DataStorageService
    ) { }

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

  setError(isError: boolean, message: string): void {
      this.error.isError = isError;
      this.error.message = message;
  }

  login() {
    this.userService.login(this.email, this.password)
    .subscribe(
      result => {
        this.isLoading = false;
        this.router.navigate(['/rides']);
        this.dataStorageService.storeData('user_id', result._id);
        // Create guard
      },
      () => {
        this.isLoading = false;
        this.setError(true, "Email or password is incorrect");
      }
    )
  }

  setEmail(email: string) {
    this.email = email;
  }

  setPassword(password: string) {
    this.password = password;
  }


  closeError(isError: boolean) {
    this.error.isError = isError;
  }

}
