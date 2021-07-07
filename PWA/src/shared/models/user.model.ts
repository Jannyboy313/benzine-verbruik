export class User {
    _id?: string;
    email?: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(_id: string, email: string, createdAt: Date, updatedAt: Date) {
        this._id = _id;
        this.email = email;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
