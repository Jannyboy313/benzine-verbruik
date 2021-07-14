import { Db } from '../../../util/db';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {
	constructor(private db: Db) {}

	getDashboardData(): Observable<any> {
		return this.db.sendGetRequest(`dashboard`);
	}
}
