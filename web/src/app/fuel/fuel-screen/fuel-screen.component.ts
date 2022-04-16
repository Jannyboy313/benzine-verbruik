import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FuelListService } from 'src/shared/Services/fuel-list-service';
import { FuelModalComponent } from '../fuel-modal/fuel-modal.component';
import { Filter } from 'src/shared/models/filter.model';

@Component({
	selector: 'app-fuel-screen',
	templateUrl: './fuel-screen.component.html',
	styleUrls: ['./fuel-screen.component.scss']
})
export class FuelScreenComponent implements OnInit {
	public filterShown: boolean = false;
	public filters: Filter[] = [];
	public filterUrl: string = '';

	constructor(
		public dialog: MatDialog,
		private fuelListService: FuelListService
	) {
		this.createFilters();
	}

	private createFilters(): void {
		this.filters.push(new Filter('createdAt', 'Sorting on created'));
		this.filters.push(new Filter('updatedAt', 'Sorting on last updated'));
		this.filters.push(new Filter('litre', 'Sorting on litre'));
		this.filters.push(new Filter('price', 'Sorting on price'));
		this.filters.push(new Filter('gas_station', 'Sorting on gas stations'));
		this.filters.push(new Filter('location', 'Sorting on locations'));
	}

	ngOnInit(): void {}

	openCreateModal(): void {
		let dialogRef = this.dialog.open(FuelModalComponent, {
			width: '85vw',
			maxWidth: '85vw',
			data: {
				header: `Aanmaken nieuwe tankbeurt`
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.fuelListService.addFuel(result);
			}
		});
	}

	openFilter(): void {
		this.filterShown = this.filterShown ? false : true;
	}

	updateFilterUrl(url: string): void {
		this.filterUrl = url;
	}
}
