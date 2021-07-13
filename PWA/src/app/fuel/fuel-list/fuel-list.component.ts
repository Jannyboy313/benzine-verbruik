import { Component, OnInit } from '@angular/core';
import { Error } from 'src/shared/models/error.model';

@Component({
	selector: 'app-fuel-list',
	templateUrl: './fuel-list.component.html',
	styleUrls: ['./fuel-list.component.scss']
})
export class FuelListComponent implements OnInit {
	isLoading: boolean = false;
	error: Error = {
		isError: false,
		message: 'Network error'
	};

	constructor() {}

	ngOnInit(): void {}

	fuelExist(): boolean {
		return true;
	}

	closeError(isError: boolean) {
		this.error.isError = isError;
	}
}
