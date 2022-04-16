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
	error: Error = new Error();

	isLoading: boolean = false;
	email: string = '';
	password: string = '';

	constructor(
		private userService: UserService,
		private router: Router,
		private dataStorageService: DataStorageService
	) {}

	ngOnInit(): void {}

	onSubmit(): void {
		this.error.setError(false, 'There has been a network error');
		this.isLoading = true;

		if (this.email === '' || this.password === '') {
			this.error.setError(true, 'Niet alle velden zijn ingevuld');
			this.isLoading = false;
		} else {
			this.login();
		}
	}

	login() {
		this.userService.login(this.email, this.password).subscribe({
			next: (result) => {
				this.isLoading = false;
				this.router.navigate(['/rides']);
				this.dataStorageService.storeData('user_id', result._id);
			},
			error: (err) => {
				this.error.setError(true, err.error.message);
				this.isLoading = false;
			}
		});
	}

	setEmail(email: string) {
		this.email = email;
	}

	setPassword(password: string) {
		this.password = password;
	}
}
