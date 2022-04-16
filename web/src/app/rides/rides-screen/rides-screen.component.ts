import { RidesListService } from './../../../shared/Services/rides-list-service';
import { RideModalComponent } from './../ride-modal/ride-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Filter } from 'src/shared/models/filter.model';

@Component({
	selector: 'app-rides-screen',
	templateUrl: './rides-screen.component.html',
	styleUrls: ['./rides-screen.component.scss']
})
export class RidesScreenComponent implements OnInit {
	public filterShown: boolean = false;
	public filters: Filter[] = [];
	public filterUrl: string = '';

	constructor(
		public dialog: MatDialog,
		private ridesListService: RidesListService
	) {
		this.createFilters();
	}

	private createFilters(): void {
		this.filters.push(new Filter('createdAt', 'Sorting on created'));
		this.filters.push(new Filter('updatedAt', 'Sorting on last updated'));
		this.filters.push(new Filter('distance', 'Sorting on distance'));
		this.filters.push(new Filter('title', 'Sorting on title'));
	}

	ngOnInit(): void {}

	openCreateModal(): void {
		let dialogRef = this.dialog.open(RideModalComponent, {
			width: '85vw',
			maxWidth: '85vw',
			data: {
				header: `Aanmaken nieuwe rit`
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.ridesListService.addRide(result);
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
