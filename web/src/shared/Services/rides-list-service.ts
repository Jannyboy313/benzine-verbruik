import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ride } from '../models/ride.model';

@Injectable({
	providedIn: 'root'
})
export class RidesListService {
	private ridesSubject: Subject<Ride[]> = new Subject<Ride[]>();
	private rides: Ride[] = [];

	constructor() {
		this.ridesSubject.next([]);
	}

	getRidesSubject(): Subject<Ride[]> {
		return this.ridesSubject;
	}

	setRides(rides: Ride[]): void {
		if (this.rides.length === 0) {
			this.rides = rides;
		} else {
			this.rides = this.rides.concat(rides);
		}
		this.ridesSubject.next(this.rides);
	}

	clearRides(): void {
		this.rides = [];
		this.ridesSubject.next(this.rides);
	}

	addRide(ride: Ride): void {
		this.rides.push(ride);
		this.ridesSubject.next(this.rides);
	}

	updateRide(ride: Ride): void {
		for (let i = 0; i < this.rides.length; i++) {
			if (this.rides[i]._id === ride._id) {
				this.rides[i] = ride;
				return this.ridesSubject.next(this.rides);
			}
		}
	}

	deleteRide(ride: Ride): void {
		for (let i = 0; i < this.rides.length; i++) {
			if (this.rides[i]._id === ride._id) {
				this.rides.splice(i, 1);
				return this.ridesSubject.next(this.rides);
			}
		}
	}
}
