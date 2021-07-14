import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardScreenComponent } from './dashboard-screen/dashboard-screen.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

import { DashboardService } from 'src/shared/Services/db/dashboard.service';


@NgModule({
	declarations: [DashboardScreenComponent, BarChartComponent],
	imports: [CommonModule, DashboardRoutingModule],
	providers: [DashboardService]
})
export class DashboardModule {}
