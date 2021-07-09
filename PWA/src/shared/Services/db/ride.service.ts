import { Db } from '../../../util/db';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Ride } from '../../models/ride.model';

@Injectable()
export class UserService {

  constructor(private db: Db) {}

    getRides(id: string): Observable<Ride[]> {
    return this.db.sendGetRequest(`ride`)
    .pipe(map((response: Ride[]) => {
      return response;
    }));
  }

  getRide(id: string): Observable<Ride> {
    return this.db.sendGetRequest(`ride/${id}`)
    .pipe(map((response: Ride) => {
      return response;
    }));
  }
}
