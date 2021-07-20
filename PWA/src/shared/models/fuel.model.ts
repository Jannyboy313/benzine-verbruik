export class Fuel {
	_id?: string;
	litre: number;
	price: number;
	gas_station: string;
	location: string;
	user?: string;
	createdAt?: Date;
	updatedAt?: Date;

	constructor(
		_id: string,
		litre: number,
		price: number,
		gas_station: string,
		location: string,
		user: string,
		createdAt: Date,
		updatedAt: Date
	) {
		this._id = _id;
		this.litre = litre;
		this.price = price;
		this.gas_station = gas_station;
		this.location = location;
		this.user = user;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}
