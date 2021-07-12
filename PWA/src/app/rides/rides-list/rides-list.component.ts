import { Component, Input, OnInit } from '@angular/core';
import { RideService } from 'src/shared/Services/db/ride.service';
import { Ride } from 'src/shared/models/ride.model';
import { Error } from '../../../shared/models/error.model';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-rides-list',
	templateUrl: './rides-list.component.html',
	styleUrls: ['./rides-list.component.scss']
})
export class RidesListComponent implements OnInit {
	@Input() reloadRidesList: Subject<boolean> = new Subject<boolean>();

	isLoading: boolean = true;

	error: Error = {
		isError: false,
		message: 'There has been an error while trying to load the rides'
	};

	rides: Ride[] = [];

	constructor(private rideService: RideService) {}

	ngOnInit(): void {
		this.reloadRidesList.subscribe(response => {
			if (response) {
				this.getRides();
			}
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
				this.rides = result;
				this.reloadRidesList.next(false);
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

	closeError(isError: boolean) {
		this.error.isError = isError;
	}

	private setError(isError: boolean, message: string): void {
		this.error.isError = isError;
		this.error.message = message;
	}
}
