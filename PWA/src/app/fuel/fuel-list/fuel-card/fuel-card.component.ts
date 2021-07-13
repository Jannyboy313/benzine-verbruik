import { Component, Input, OnInit } from '@angular/core';
import { Fuel } from 'src/shared/models/fuel.model';
import * as moment from 'moment';

@Component({
	selector: 'app-fuel-card',
	templateUrl: './fuel-card.component.html',
	styleUrls: ['./fuel-card.component.scss']
})
export class FuelCardComponent implements OnInit {
	@Input() fuel: Fuel = {
    litre: 0,
    price: 0,
    gas_station: '',
    location: ''
  };
	constructor() {}

	ngOnInit(): void {}

	formatDate(date: Date | undefined) {
		moment.locale('nl');
		let formattedDate = moment(date).format('ddd DD MMM YYYY HH:mm'); // Woe 17 Mrt 2021 14:31
		return (
			formattedDate.charAt(0).toUpperCase() +
			formattedDate.slice(1).replace(/\./g, '')
		);
	}
}
