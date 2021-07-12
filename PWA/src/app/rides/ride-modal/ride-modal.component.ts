import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { RideService } from 'src/shared/Services/db/ride.service';
import { Error } from 'src/shared/models/error.model';
import { Ride } from 'src/shared/models/ride.model';

@Component({
	selector: 'app-ride-modal',
	templateUrl: './ride-modal.component.html',
	styleUrls: ['./ride-modal.component.scss']
})
export class RideModalComponent implements OnInit {
	error: Error = {
		isError: false,
		message: 'Iets is fout gegaan'
	};

	isLoading = false;

	form: FormGroup = new FormGroup({
		title: new FormControl(''),
		description: new FormControl(''),
		distance: new FormControl()
	});

	constructor(
		public dialogRef: MatDialogRef<any>,
		private rideService: RideService,
		@Inject(MAT_DIALOG_DATA)
		public data: any = {
			header: 'Aanmaken nieuwe rit',
			title: '',
			_id: ''
		}
	) {}

	ngOnInit() {
		this.setInputValues();
	}

	setInputValues() {
		if (this.data.title !== '') {
			this.form.controls['title'].setValue(this.data.title);
			this.form.controls['description'].setValue(this.data.description);
			this.form.controls['distance'].setValue(this.data.distance);
		}
	}

	closeDialog(succes: boolean): void {
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

		const ride: Ride = {
			title: this.form.controls['title'].value,
			description: this.form.controls['description'].value,
			distance: this.form.controls['distance'].value,
			_id: this.data._id
		};

		this.saveRide(ride);
	}

	private isValid(): boolean {
		// Add regex or validators to form<<<
		return true;
	}

	private saveRide(ride: Ride): void {
		if (this.data._id) {
			return this.putRide(ride);
		}
		this.postRide(ride);
	}

	private postRide(ride: Ride): void {
		this.rideService.postRide(ride).subscribe(
			() => {
				this.isLoading = false;
				this.closeDialog(true);
			},
			err => {
				this.isLoading = false;
				this.setError(true, err.error.message.message);
			}
		);
	}

	private putRide(ride: Ride): void {
		this.rideService.putRide(ride).subscribe(
			() => {
				this.isLoading = false;
				this.closeDialog(true);
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
