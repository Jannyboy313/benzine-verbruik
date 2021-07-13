import { Fuel } from './../models/fuel.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FuelListService {
	private fuelSubject: Subject<Fuel[]> = new Subject<Fuel[]>();
	private fuelList: Fuel[] = [];

	constructor() {
		this.fuelSubject.next([]);
	}

	getRidesSubject(): Subject<Fuel[]> {
		return this.fuelSubject;
	}

	setRides(fuelList: Fuel[]): void {
		this.fuelList = fuelList;
		this.fuelSubject.next(fuelList);
	}

	addRide(fuel: Fuel): void {
		this.fuelList.push(fuel);
		this.fuelSubject.next(this.fuelList);
	}

	updateRide(fuel: Fuel): void {
		for (let i = 0; i < this.fuelList.length; i++) {
			if (this.fuelList[i]._id === fuel._id) {
				this.fuelList[i] = fuel;
				return this.fuelSubject.next(this.fuelList);
			}
		}
	}

	deleteRide(fuel: Fuel): void {
		for (let i = 0; i < this.fuelList.length; i++) {
			if (this.fuelList[i]._id === fuel._id) {
				this.fuelList.splice(i, 1);
				return this.fuelSubject.next(this.fuelList);
			}
		}
	}
}
