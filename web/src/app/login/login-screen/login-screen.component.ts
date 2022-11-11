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
	public error: Error = new Error();
	public isLoading: boolean = false;
	public email: string = '';
	public password: string = '';

	constructor(
		private userService: UserService,
		private router: Router,
		private dataStorageService: DataStorageService
	) {}

	public ngOnInit(): void {}

	public onSubmit(): void {
		this.error.setError(false, 'There has been a network error');
		this.isLoading = true;

		if (this.email === '' || this.password === '') {
			this.error.setError(true, 'Niet alle velden zijn ingevuld');
			this.isLoading = false;
		} else {
			this.login();
		}
	}

	public login() {
		this.userService.login(this.email, this.password).subscribe({
			next: result => {
				this.isLoading = false;
				this.router.navigate(['/rides']);
				this.dataStorageService.storeData('user_id', result._id);
				this.dataStorageService.storeData('user_email', result.email);
			},
			error: err => {
				this.error.setError(true, err.error.message);
				this.isLoading = false;
			}
		});
	}

	public setEmail(email: string) {
		this.email = email;
	}

	public setPassword(password: string) {
		this.password = password;
	}
}
