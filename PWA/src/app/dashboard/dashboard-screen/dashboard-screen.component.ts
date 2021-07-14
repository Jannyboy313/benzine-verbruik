import { DashboardService } from './../../../shared/Services/db/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard-screen',
	templateUrl: './dashboard-screen.component.html',
	styleUrls: ['./dashboard-screen.component.scss']
})
export class DashboardScreenComponent implements OnInit {
	dashboardData: any = {
		litres: 0,
		prices: 0,
		distance: 0,
    balance: 0
	};

	constructor(private dashboardService: DashboardService) {}

	ngOnInit(): void {}

	getDashboardData() {
		this.dashboardService.getDashboardData().subscribe(
			result => {
        this.dashboardData = result;
      },
			err => {}
		);
	}
}
