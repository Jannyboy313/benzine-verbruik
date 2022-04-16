import { FuelService } from './../../../../shared/Services/db/fuel.service';
import { FuelListService } from './../../../../shared/Services/fuel-list-service';
import { Component, Input, OnInit } from '@angular/core';
import { Fuel } from 'src/shared/models/fuel.model';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/shared/components/confirm-dialog/confirm-dialog.component';
import { FuelModalComponent } from '../../fuel-modal/fuel-modal.component';

@Component({
	selector: 'app-fuel-card',
	templateUrl: './fuel-card.component.html',
	styleUrls: ['./fuel-card.component.scss']
})
export class FuelCardComponent implements OnInit {
	@Input() fuel: Fuel = {
		litre: 0,
		price: 0,
		gas_station: '',
		location: ''
	};
	constructor(
		public dialog: MatDialog,
		private fuelService: FuelService,
		private fuelListService: FuelListService
	) {}

	ngOnInit(): void {}

	formatDate(date: Date | undefined) {
		moment.locale('nl');
		let formattedDate = moment(date).format('ddd DD MMM YYYY HH:mm'); // Woe 17 Mrt 2021 14:31
		return (
			formattedDate.charAt(0).toUpperCase() +
			formattedDate.slice(1).replace(/\./g, '')
		);
	}

	openConfirmDialog(): void {
		let dialogRef = this.dialog.open(ConfirmDialogComponent, {
			data: {
				title: `Tankbeurt verwijderen?`,
				message: `Weet u zeker dat u de tankbeurt van ${this.fuel.gas_station} uit ${this.fuel.location} wilt verwijderen?`,
				name: 'Verwijderen'
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.fuelService.deleteFuel(this.fuel._id).subscribe({
					next: () => {
						this.fuelListService.deleteFuel(this.fuel);
					},
					error: (err) => {
						console.error(err);
					}
				});
			}
		});
	}

	openEditModal(): void {
		let dialogRef = this.dialog.open(FuelModalComponent, {
			width: '85vw',
			maxWidth: '85vw',
			data: {
				header: `Wijzigen van tankbeurt`,
				fuel: this.fuel,
				edit: true
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.fuelListService.updateFuel(result);
			}
		});
	}
}
