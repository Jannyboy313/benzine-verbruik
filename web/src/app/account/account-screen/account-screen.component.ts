import { Error } from './../../../shared/models/error.model';
import { Router } from '@angular/router';
import { LoginService } from './../../../shared/Services/login.service';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/shared/Services/data-storage.service';

@Component({
	selector: 'app-account-screen',
	templateUrl: './account-screen.component.html',
	styleUrls: ['./account-screen.component.scss']
})
export class AccountScreenComponent implements OnInit {
	public email: string = '';
	public error: Error = new Error();

	constructor(
		private dataStorageService: DataStorageService,
		private loginService: LoginService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.getEmail();
	}

	private getEmail() {
		let email = this.dataStorageService.getStoredData('user_email');
		email = email === null ? 'No email found!' : email;
		this.email = email;
	}

	public logout() {
		this.loginService.logout().subscribe({
			next: result => {
        console.log("IM CALLED! RESULT", result);
				this.dataStorageService.clearDataStorage();
				this.router.navigate(['/login']);
			},
			error: err => {
        console.log("IM CALLED! ERROR", err);
        this.error.setError(true, "Logout has failed");
      }
		});
	}
}
