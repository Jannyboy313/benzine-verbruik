export class Error {
	isError: boolean = false;
	message: string = 'Network error';

	constructor() {}

	public setError(isError: boolean, message: string): void {
		this.isError = isError;
		if (message !== '')
			this.message = message;
	}
}
