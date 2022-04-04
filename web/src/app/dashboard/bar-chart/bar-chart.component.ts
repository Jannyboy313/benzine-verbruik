import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
	@Input() name: string = '';
	@Input() value: any = {
		amount: 0,
		total: 0
	};

	percentage: number = 40;

	constructor() {}

	ngOnInit(): void {
		// this.percentage = this.calcPercentage();
	}

	calcPercentage(): number {
		let percentage = this.value.amount / this.value.total;
		return Math.round(percentage);
	}
}
