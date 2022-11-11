import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{
		path: 'home',
		loadChildren: () =>
			import(`./login/login.module`).then(m => m.LoginModule)
	},
	{
		path: 'rides',
		loadChildren: () =>
			import(`./rides/rides.module`).then(m => m.RidesModule)
	},
	{
		path: 'fuel',
		loadChildren: () => import(`./fuel/fuel.module`).then(m => m.FuelModule)
	},
	{
		path: 'dashboard',
		loadChildren: () =>
			import(`./dashboard/dashboard.module`).then(m => m.DashboardModule)
	},
	{
		path: 'account',
		loadChildren: () =>
			import(`./account/account.module`).then(m => m.AccountModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
