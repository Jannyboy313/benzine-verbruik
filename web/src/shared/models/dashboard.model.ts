export class Dashboard {
	litres: number | null;
	prices: number | null;
	distance: number | null;
	balance: number | null;

	constructor(
		litres: number | null,
		prices: number | null,
		distance: number | null,
		balance: number | null
	) {
		this.litres = litres;
		this.prices = prices;
		this.distance = distance;
		this.balance = balance;
	}
}
