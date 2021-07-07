import { Db } from '../../../util/db';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable()
export class UserService {

  constructor(private db: Db) {}

  getUser(id: string): Observable<User> {
    return this.db.sendGetRequest(`user/${id}`);
  }

  createUser(payload: object): Observable<User> {
    return this.db.sendPostRequest('user/', payload);
  }

  updateUser(payload: object, id: string): Observable<User> {
    return this.db.sendPutRequest(`user/${id}`, payload);
  }

  deleteUser(id: string): Observable<User> {
    return this.db.sendDeleteRequest(`user/${id}`);
  }
}
