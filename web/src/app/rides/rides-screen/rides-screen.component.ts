import { RidesListService } from './../../../shared/Services/rides-list-service';
import { RideModalComponent } from './../ride-modal/ride-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-rides-screen',
	templateUrl: './rides-screen.component.html',
	styleUrls: ['./rides-screen.component.scss']
})
export class RidesScreenComponent implements OnInit {
	public filterShown: boolean = false;

	constructor(
		public dialog: MatDialog,
		private ridesListService: RidesListService
	) {}

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
}
