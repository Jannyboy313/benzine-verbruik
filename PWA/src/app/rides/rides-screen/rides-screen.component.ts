import { RidesListService } from './../../../shared/Services/rides-list-service';
import { RideModalComponent } from './../ride-modal/ride-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Ride } from 'src/shared/models/ride.model';

@Component({
	selector: 'app-rides-screen',
	templateUrl: './rides-screen.component.html',
	styleUrls: ['./rides-screen.component.scss']
})
export class RidesScreenComponent implements OnInit {
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
}
