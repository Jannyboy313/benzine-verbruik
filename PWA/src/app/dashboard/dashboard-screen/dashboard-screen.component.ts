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
		litres: 0,
		prices: 0,
		distance: 0,
		balance: 0
	};

	error: Error = {
		isError: false,
		message: 'Network error'
	};

	constructor(private dashboardService: DashboardService) {}

	ngOnInit(): void {
		this.getDashboardData();
	}

	getDashboardData() {
		this.setError(false, 'Network error');
		this.isLoading = true;
		this.dashboardService.getDashboardData().subscribe(
			result => {
				this.isLoading = false;
				this.dashboardData = result
			},
			err => {
				this.isLoading = false;
				this.setError(true, err.error.message);
			}
		);
	}

	private setError(isError: boolean, message: string): void {
		this.error.isError = isError;
		this.error.message = message;
	}
}
