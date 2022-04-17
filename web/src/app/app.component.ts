import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public title: string = 'benzine-pwa';

	constructor(private router: Router) {}

	public isLogin() {
		const routerPath = this.router.url.split('/')[1];
		if (routerPath === 'home') {
			return true;
		}
		return false;
	}
}
