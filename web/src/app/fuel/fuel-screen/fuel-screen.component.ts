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
		this.filters.push(new Filter('createdAt', 'Aangemaakt'));
		this.filters.push(new Filter('updatedAt', 'Laatst gewijzigd'));
		this.filters.push(new Filter('litre', 'Liter'));
		this.filters.push(new Filter('price', 'Prijs'));
		this.filters.push(new Filter('gas_station', 'Tankstations'));
		this.filters.push(new Filter('location', 'Locaties'));
	}

	public ngOnInit(): void {}

	public openCreateModal(): void {
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

	public openFilter(): void {
		this.filterShown = this.filterShown ? false : true;
	}

	public updateFilterUrl(url: string): void {
		this.filterUrl = url;
	}
}
