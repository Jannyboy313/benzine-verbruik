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
	isLoading: boolean = true;

	dashboardData: Dashboard = {
		litres: null,
		prices: null,
		distance: null,
		balance: null
	};

	error: Error = new Error();

	constructor(private dashboardService: DashboardService) {}

	ngOnInit(): void {
		this.getDashboardData();
	}

	getDashboardData() {
		this.error.setError(false, 'There has been a network error');
		this.isLoading = true;
		this.dashboardService.getDashboardData().subscribe(
			result => {
				this.isLoading = false;
				this.dashboardData = result;
			},
			err => {
				this.isLoading = false;
				this.error.setError(true, err.error.message);
			}
		);
	}

	dataExists() {
		if (!(this.dashboardData.balance || this.dashboardData.distance || this.dashboardData.prices || this.dashboardData.litres))
			return false;
		return true;
	}
}
