export class Error {
	isError: boolean;
	message: string;

	constructor(
		isError: boolean,
		message: string,
		createdAt: Date,
		updatedAt: Date
	) {
		this.isError = isError;
		this.message = message;
	}
}
