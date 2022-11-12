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
	@Input() public filterUrl: string = '';
	private previousFilterUrl: string = '';

	public isLoading: boolean = true;

	public error: Error = new Error();
	private page: number = 0;

	public rides: Ride[] = [];

	constructor(
		private rideService: RideService,
		private ridesListService: RidesListService
	) {}

	public ngOnInit(): void {
		this.ridesListService.getRidesSubject().subscribe(result => {
			this.rides = result;
		});
		this.getRides();
	}

	public ngOnChanges(changes: SimpleChanges): void {
		this.filterUrl = changes.filterUrl.currentValue;
		this.getRides();
	}

	public getRides() {
		this.error.setError(
			false,
			'There has been an error while trying to load the rides'
		);
		this.processFilter();
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

	private processFilter() {
		if (this.filterUrl !== this.previousFilterUrl) {
			this.ridesListService.clearRides();
			this.page = 0;
		}
	}

	public ridesExist(): boolean {
		if (this.rides.length > 0) {
			return true;
		}
		return false;
	}

	public loadMoreRides(): void {
		this.page++;
		this.getRides();
	}
}
