export class Dashboard {
	litres: number;
	prices: number;
	distance: number;
	balance: number;

	constructor(
	litres: number,
	prices: number,
	distance: number,
	balance: number,
	) {
		this.litres = litres;
		this.prices = prices;
		this.distance = distance;
		this.balance = balance;
	}
}
