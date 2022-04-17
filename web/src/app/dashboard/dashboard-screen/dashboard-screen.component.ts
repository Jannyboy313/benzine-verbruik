import { DashboardService } from './../../../shared/Services/db/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Error } from 'src/shared/models/error.model';
import { Dashboard } from 'src/shared/models/dashboard.model';

@Component({
	selector: 'app-dashboard-screen',
	templateUrl: './dashboard-screen.component.html',
	styleUrls: ['./dashboard-screen.component.scss']
})
export class DashboardScreenComponent implements OnInit {
	public isLoading: boolean = true;
	public dashboardData: Dashboard = {
		litres: null,
		prices: null,
		distance: null,
		balance: null
	};

	public error: Error = new Error();

	constructor(private dashboardService: DashboardService) {}

	public ngOnInit(): void {
		this.getDashboardData();
	}

	public getDashboardData() {
		this.error.setError(false, 'There has been a network error');
		this.isLoading = true;
		this.dashboardService.getDashboardData().subscribe({
			next: result => {
				this.isLoading = false;
				this.dashboardData = result;
			},
			error: err => {
				this.error.setError(true, err.error.message);
				this.isLoading = false;
			}
		});
	}

	public dataExists() {
		if (
			!(
				this.dashboardData.balance ||
				this.dashboardData.distance ||
				this.dashboardData.prices ||
				this.dashboardData.litres
			)
		)
			return false;
		return true;
	}
}
