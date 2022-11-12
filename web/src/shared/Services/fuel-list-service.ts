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

	getFuelSubject(): Subject<Fuel[]> {
		return this.fuelSubject;
	}

	setFuel(fuelList: Fuel[]): void {
		if (this.fuelList.length === 0) {
			this.fuelList = fuelList;
		} else {
			this.fuelList = this.fuelList.concat(fuelList);
		}
		this.fuelSubject.next(this.fuelList);
	}

	clearFuel(): void {
		this.fuelList = [];
		this.fuelSubject.next(this.fuelList);
	}

	addFuel(fuel: Fuel): void {
		this.fuelList.push(fuel);
		this.fuelSubject.next(this.fuelList);
	}

	updateFuel(fuel: Fuel): void {
		for (let i = 0; i < this.fuelList.length; i++) {
			if (this.fuelList[i]._id === fuel._id) {
				this.fuelList[i] = fuel;
				return this.fuelSubject.next(this.fuelList);
			}
		}
	}

	deleteFuel(fuel: Fuel): void {
		for (let i = 0; i < this.fuelList.length; i++) {
			if (this.fuelList[i]._id === fuel._id) {
				this.fuelList.splice(i, 1);
				return this.fuelSubject.next(this.fuelList);
			}
		}
	}
}
