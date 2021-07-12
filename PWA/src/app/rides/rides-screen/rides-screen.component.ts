import { RideModalComponent } from './../ride-modal/ride-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-rides-screen',
	templateUrl: './rides-screen.component.html',
	styleUrls: ['./rides-screen.component.scss']
})
export class RidesScreenComponent implements OnInit {
	reloadRidesList: Subject<boolean> = new Subject<boolean>();

	constructor(public dialog: MatDialog) {}

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
				this.reloadRidesList.next(true);
			}
		});
	}
}
