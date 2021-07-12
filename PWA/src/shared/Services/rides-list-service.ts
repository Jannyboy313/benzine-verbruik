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
        this.rides = rides;
        this.ridesSubject.next(rides);
    }

	addRide(ride: Ride): void {
        this.rides.push(ride)
		this.ridesSubject.next(this.rides);
	}

	deleteRide(ride: Ride): void {
        // this.rides.push(ride);
		this.ridesSubject.next(this.rides);
    }
}
