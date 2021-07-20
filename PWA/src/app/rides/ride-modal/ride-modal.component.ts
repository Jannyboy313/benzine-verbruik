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
      edit: false
		}
	) {}

	ngOnInit() {
		this.setInputValues();
	}

	setInputValues() {
		if (this.data.edit) {
			this.form.controls['title'].setValue(this.data.ride.title);
			this.form.controls['description'].setValue(this.data.ride.description);
			this.form.controls['distance'].setValue(this.data.ride.distance);
		}
	}

	closeDialog(succes: boolean | Ride): void {
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
			distance: this.form.controls['distance'].value
		};

		this.saveRide(ride);
	}

	private isValid(): boolean {
		// Add regex or validators to form<<<
		return true;
	}

	private saveRide(ride: Ride): void {
		if (this.data.edit) {
			return this.putRide(ride);
		}
		this.postRide(ride);
	}

	private postRide(ride: Ride): void {
		this.rideService.postRide(ride).subscribe(
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

	private putRide(ride: Ride): void {
    ride['_id'] = this.data.ride._id;
		this.rideService.putRide(ride).subscribe(
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
