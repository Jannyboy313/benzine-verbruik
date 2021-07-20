import { Fuel } from './../../../shared/models/fuel.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Error } from 'src/shared/models/error.model';
import { FuelService } from 'src/shared/Services/db/fuel.service';

@Component({
	selector: 'app-fuel-modal',
	templateUrl: './fuel-modal.component.html',
	styleUrls: ['./fuel-modal.component.scss']
})
export class FuelModalComponent implements OnInit {
	error: Error = {
		isError: false,
		message: 'Iets is fout gegaan'
	};

	isLoading = false;

	form: FormGroup = new FormGroup({
		litre: new FormControl(),
		price: new FormControl(),
		gas_station: new FormControl(''),
		location: new FormControl('')
	});

	constructor(
		public dialogRef: MatDialogRef<any>,
		private fuelService: FuelService,
		@Inject(MAT_DIALOG_DATA)
		public data: any = {
			header: 'Aanmaken nieuwe tankbeurt',
			edit: false
		}
	) {}

	ngOnInit() {
		this.setInputValues();
	}

	setInputValues() {
		if (this.data.edit) {
			this.form.controls['litre'].setValue(this.data.fuel.litre);
			this.form.controls['price'].setValue(this.data.fuel.price);
			this.form.controls['gas_station'].setValue(this.data.fuel.gas_station);
			this.form.controls['location'].setValue(this.data.fuel.location);
		}
	}

	closeDialog(succes: boolean | Fuel): void {
		this.dialogRef.close(succes);
	}

	getActionName(): string {
		return this.data.header.split(' ')[0];
	}

	onSubmit(): void {
		this.isLoading = true;
		if (!this.isValid()) {
			this.isLoading = false;
			return this.setError(true, 'Niet alle velden zijn goed ingevuld');
		}

		const fuel: Fuel = {
			litre: this.form.controls['litre'].value,
			price: this.form.controls['price'].value,
			gas_station: this.form.controls['gas_station'].value,
			location: this.form.controls['location'].value
		};

		this.saveFuel(fuel);
	}

	private isValid(): boolean {
		// Add regex or validators to form<<<
		return true;
	}

	private saveFuel(fuel: Fuel): void {
		if (this.data.edit) {
			return this.putFuel(fuel);
		}
		this.postFuel(fuel);
	}

	private postFuel(fuel: Fuel): void {
		this.fuelService.postFuel(fuel).subscribe(
			result => {
				this.isLoading = false;
				this.closeDialog(result);
			},
			err => {
				this.isLoading = false;
				this.setError(true, err.error.message.message);
			}
		);
	}

	private putFuel(fuel: Fuel): void {
		fuel['_id'] = this.data.fuel._id;
		this.fuelService.putFuel(fuel).subscribe(
			result => {
				this.isLoading = false;
				this.closeDialog(result);
			},
			err => {
				this.isLoading = false;
				this.setError(true, err.error.message.message);
			}
		);
	}

	private setError(isError: boolean, message: string): void {
		this.error.isError = isError;
		this.error.message = message;
	}

	closeError(isError: boolean) {
		this.error.isError = isError;
	}
}
