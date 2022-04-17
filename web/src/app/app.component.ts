import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'benzine-pwa';

	constructor(private router: Router) {}

	isLogin() {
		const routerPath = this.router.url.split('/')[1];
		if (routerPath === 'home') {
			return true;
		}
		return false;
	}
}
