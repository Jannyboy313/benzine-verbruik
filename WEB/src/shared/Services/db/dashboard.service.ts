import { Db } from '../../../util/db';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dashboard } from 'src/shared/models/dashboard.model';

@Injectable()
export class DashboardService {
	constructor(private db: Db) {}

	getDashboardData(): Observable<Dashboard> {
		return this.db.sendGetRequest(`dashboard`).pipe(
			map((response: Dashboard) => {
				return response;
			})
		);
	}
}
