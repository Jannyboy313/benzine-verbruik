import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-bottom-navigation',
	templateUrl: './bottom-navigation.component.html',
	styleUrls: ['./bottom-navigation.component.scss']
})
export class BottomNavigationComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	isActive(path: string): boolean {
		const routerPath = this.router.url.split('/')[1];

		if (routerPath === path.split('/')[1]) {
			return true;
		}
		return false;
	}
}
