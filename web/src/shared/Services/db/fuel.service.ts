import { Db } from '../../../util/db';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fuel } from '../../models/fuel.model';

@Injectable()
export class FuelService {
	constructor(private db: Db) {}

	postFuel(fuel: Fuel): Observable<Fuel> {
		return this.db.sendPostRequest(`fuel`, fuel).pipe(
			map((response: Fuel) => {
				return response;
			})
		);
	}

	getFuels(filter: string): Observable<Fuel[]> {
		return this.db.sendGetRequest(`fuel?${filter}`).pipe(
			map((response: Fuel[]) => {
				return response;
			})
		);
	}

	getFuel(id: string): Observable<Fuel> {
		return this.db.sendGetRequest(`fuel/${id}`).pipe(
			map((response: Fuel) => {
				return response;
			})
		);
	}

	putFuel(fuel: Fuel): Observable<Fuel> {
		return this.db.sendPutRequest(`fuel/${fuel._id}`, fuel);
	}

	deleteFuel(id: string | undefined): Observable<any> {
		return this.db.sendDeleteRequest(`fuel/${id}`);
	}
}
