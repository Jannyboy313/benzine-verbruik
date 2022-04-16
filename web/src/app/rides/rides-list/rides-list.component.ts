import { RidesListService } from './../../../shared/Services/rides-list-service';
import {
	Component,
	OnInit,
	Input,
	SimpleChanges,
	OnChanges
} from '@angular/core';
import { RideService } from 'src/shared/Services/db/ride.service';
import { Ride } from 'src/shared/models/ride.model';
import { Error } from '../../../shared/models/error.model';

@Component({
	selector: 'app-rides-list',
	templateUrl: './rides-list.component.html',
	styleUrls: ['./rides-list.component.scss']
})
export class RidesListComponent implements OnInit, OnChanges {
	@Input() filterUrl: string = '';

	isLoading: boolean = true;

	error: Error = new Error();
	page: number = 0;

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

	ngOnChanges(changes: SimpleChanges): void {
		this.filterUrl = changes.filterUrl.currentValue;
		this.getRides();
	}

	getRides() {
		this.error.setError(
			false,
			'There has been an error while trying to load the rides'
		);
		this.isLoading = true;
		this.rideService.getRides(this.page, this.filterUrl).subscribe({
			next: result => {
				this.isLoading = false;
				this.ridesListService.setRides(result);
			},
			error: err => {
				this.error.setError(true, err.error.message);
				this.isLoading = false;
			}
		});
	}

	ridesExist(): boolean {
		if (this.rides.length > 0) {
			return true;
		}
		return false;
	}

	loadMoreRides(): void {
		this.page++;
		this.getRides();
	}
}
