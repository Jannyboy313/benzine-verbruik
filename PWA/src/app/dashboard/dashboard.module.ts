import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardScreenComponent } from './dashboard-screen/dashboard-screen.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    DashboardScreenComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
