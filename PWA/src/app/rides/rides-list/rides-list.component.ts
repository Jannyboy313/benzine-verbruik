import { RidesListService } from './../../../shared/Services/rides-list-service';
import { Component, OnInit } from '@angular/core';
import { RideService } from 'src/shared/Services/db/ride.service';
import { Ride } from 'src/shared/models/ride.model';
import { Error } from '../../../shared/models/error.model';

@Component({
	selector: 'app-rides-list',
	templateUrl: './rides-list.component.html',
	styleUrls: ['./rides-list.component.scss']
})
export class RidesListComponent implements OnInit {
	isLoading: boolean = true;

	error: Error = {
		isError: false,
		message: 'There has been an error while trying to load the rides'
	};

	rides: Ride[] = [];

	constructor(
		private rideService: RideService,
		private ridesListService: RidesListService
	) {}

	ngOnInit(): void {
		this.ridesListService.getRidesSubject().subscribe(result => {
			this.rides = result;
		});
		this.getRides();
	}

	getRides() {
		this.setError(
			false,
			'There has been an error while trying to load the rides'
		);
		this.isLoading = true;
		this.rideService.getRides().subscribe(
			result => {
				this.isLoading = false;
				this.ridesListService.setRides(result);
			},
			err => {
				this.setError(true, err.error.message);
				this.isLoading = false;
			}
		);
	}

	ridesExist(): boolean {
		if (this.rides.length > 0) {
			return true;
		}
		return false;
	}

	private setError(isError: boolean, message: string): void {
		this.error.isError = isError;
		this.error.message = message;
	}
}
