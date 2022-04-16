import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FilterService {
    private originalData: any[] = [];
    private filteredData: any[] = [];

	constructor() {	}

    setData(originalData: any[]): void {
        this.originalData = originalData;
    }

}
