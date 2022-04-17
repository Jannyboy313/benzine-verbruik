import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
	@Input() public name: string = '';
	@Input() public value: any = {
		amount: 0,
		total: 0
	};

	public percentage: number = 40;

	constructor() {}

	public ngOnInit(): void {
		// this.percentage = this.calcPercentage();
	}

	public calcPercentage(): number {
		let percentage = this.value.amount / this.value.total;
		return Math.round(percentage);
	}
}
