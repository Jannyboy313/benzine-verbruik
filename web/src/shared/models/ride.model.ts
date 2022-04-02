export class Ride {
	_id?: string;
	title: string;
	description: string;
	distance: number;
	user?: string;
	createdAt?: Date;
	updatedAt?: Date;

	constructor(
		_id: string,
		title: string,
		description: string,
		distance: number,
		user: string,
		createdAt: Date,
		updatedAt: Date
	) {
		this._id = _id;
		this.title = title;
		this.description = description;
		this.distance = distance;
		this.user = user;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}
