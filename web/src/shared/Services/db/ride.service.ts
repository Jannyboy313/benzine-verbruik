import { Db } from '../../../util/db';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ride } from '../../models/ride.model';

@Injectable()
export class RideService {
	constructor(private db: Db) {}

	postRide(ride: Ride): Observable<Ride> {
		return this.db.sendPostRequest(`ride`, ride).pipe(
			map((response: Ride) => {
				return response;
			})
		);
	}

	getRides(page: number, filter: string): Observable<Ride[]> {
		return this.db.sendGetRequest(`ride?page=${page}${filter}`).pipe(
			map((response: Ride[]) => {
				return response;
			})
		);
	}

	getRide(id: string): Observable<Ride> {
		return this.db.sendGetRequest(`ride/${id}`).pipe(
			map((response: Ride) => {
				return response;
			})
		);
	}

	putRide(ride: Ride): Observable<Ride> {
		return this.db.sendPutRequest(`ride/${ride._id}`, ride);
	}

	deleteRide(id: string | undefined): Observable<any> {
		return this.db.sendDeleteRequest(`ride/${id}`);
	}
}
