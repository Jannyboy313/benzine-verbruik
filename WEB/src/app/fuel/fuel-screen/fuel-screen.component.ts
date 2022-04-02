import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FuelListService } from 'src/shared/Services/fuel-list-service';
import { FuelModalComponent } from '../fuel-modal/fuel-modal.component';

@Component({
	selector: 'app-fuel-screen',
	templateUrl: './fuel-screen.component.html',
	styleUrls: ['./fuel-screen.component.scss']
})
export class FuelScreenComponent implements OnInit {
	constructor(
		public dialog: MatDialog,
		private fuelListService: FuelListService
	) {}

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
}
