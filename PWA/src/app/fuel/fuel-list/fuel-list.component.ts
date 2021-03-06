import { FuelListService } from './../../../shared/Services/fuel-list-service';
import { Component, OnInit } from '@angular/core';
import { Error } from 'src/shared/models/error.model';
import { FuelService } from 'src/shared/Services/db/fuel.service';
import { Fuel } from 'src/shared/models/fuel.model';

@Component({
	selector: 'app-fuel-list',
	templateUrl: './fuel-list.component.html',
	styleUrls: ['./fuel-list.component.scss']
})
export class FuelListComponent implements OnInit {
	isLoading: boolean = true;

	error: Error = new Error();
	page: number = 0;

	fuelList: Fuel[] = [];

	constructor(
		private fuelService: FuelService,
		private fuelListService: FuelListService
	) {}

	ngOnInit(): void {
		this.fuelListService.getFuelSubject().subscribe(result => {
			this.fuelList = result;
		});
		this.getFuel();
	}

	getFuel() {
		this.error.setError(
			false,
			'There has been an error while trying to load the fuel'
		);
		this.isLoading = true;
		this.fuelService.getFuels().subscribe(
			result => {
				this.isLoading = false;
				this.fuelListService.setFuel(result);
			},
			err => {
				this.error.setError(true, err.error.message);
				this.isLoading = false;
			}
		);
	}

	fuelExist(): boolean {
		if (this.fuelList.length > 0) {
			return true;
		}
		return false;
	}

	loadMoreFuel(): void {
		this.page++;
		this.getFuel();
	}
}
