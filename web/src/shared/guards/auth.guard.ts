import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Services/login.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private loginService: LoginService, private router: Router) {}

	/**
	 * @param next The activatedroute
	 * @param state The routerstate
	 * @returns boolean If route can be accessed
	 */
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		if (this.loginService.isLoggedIn()) {
			return true;
		}
		this.router.navigate(['/home']);
		return false;
	}
}
