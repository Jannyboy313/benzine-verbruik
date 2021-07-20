export class Error {
	isError: boolean = false;
	message: string = 'There has been a network error';

	constructor() {}

	public setError(isError: boolean, message: string): void {
		this.isError = isError;
		if (message !== '')
			this.message = message;
	}
}
