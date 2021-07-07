import { Db } from '../../../util/db';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { User } from '../../models/user.model';

@Injectable()
export class UserService {

  constructor(private db: Db) {}

  getUser(id: String): Observable<User> {
    return this.db.sendGetRequest(`user/${id}`)
    .pipe(map((response: User) => {
      return response;
    }));
  }

  registerUser(payload: object): Observable<User> {
    return this.db.sendPostRequest('user/register', payload);
  }

  login(email: String, password: String): Observable<User> {
        return this.db.sendPostRequest('user/login', {
            email: email,
            password: password
        })
        .pipe(map((response: User) => {
          return response;
        }));
  };
}
