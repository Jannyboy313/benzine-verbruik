import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
	percentage: number = 40;

	constructor() {}

	ngOnInit(): void {}
}
