export class Error {
    isError: boolean;
    message: String;

    constructor(isError: boolean, message: String, createdAt: Date, updatedAt: Date) {
        this.isError = isError;
        this.message = message;
    }
}
