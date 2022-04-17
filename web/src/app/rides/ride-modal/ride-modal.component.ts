import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RideService } from 'src/shared/Services/db/ride.service';
import { Error } from 'src/shared/models/error.model';
import { Ride } from 'src/shared/models/ride.model';

@Component({
	selector: 'app-ride-modal',
	templateUrl: './ride-modal.component.html',
	styleUrls: ['./ride-modal.component.scss']
})
export class RideModalComponent implements OnInit {
	public error: Error = new Error();
	public isLoading = false;
	public form: FormGroup = new FormGroup({
		title: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(25),
			Validators.pattern(/[a-zA-Z]+/)
		]),
		description: new FormControl('', [
			Validators.required,
			Validators.minLength(10),
			Validators.maxLength(250)
		]),
		distance: new FormControl('', [
			Validators.required,
			Validators.min(1),
			Validators.pattern(/[0-9]+\.?[0-9]{0,2}/)
		])
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

	public ngOnInit() {
		this.setInputValues();
	}

	public setInputValues() {
		if (this.data.edit) {
			this.form.controls['title'].setValue(this.data.ride.title);
			this.form.controls['description'].setValue(
				this.data.ride.description
			);
			this.form.controls['distance'].setValue(this.data.ride.distance);
		}
	}

	public closeDialog(succes: boolean | Ride): void {
		this.dialogRef.close(succes);
	}

	public getActionName(): string {
		return this.data.header.split(' ')[0];
	}

	public onSubmit(): void {
		this.error.setError(false, 'There has been a network error');
		this.isLoading = true;
		if (!this.form.valid) {
			this.isLoading = false;
			return this.error.setError(
				true,
				'Niet alle velden zijn goed ingevuld'
			);
		}

		const ride: Ride = {
			title: this.form.controls['title'].value,
			description: this.form.controls['description'].value,
			distance: this.form.controls['distance'].value
		};

		this.saveRide(ride);
	}

	public isValid(formController: string): boolean {
		return !this.form.controls[formController].invalid;
	}

	private saveRide(ride: Ride): void {
		if (this.data.edit) {
			return this.putRide(ride);
		}
		this.postRide(ride);
	}

	private postRide(ride: Ride): void {
		this.rideService.postRide(ride).subscribe({
			next: result => {
				this.isLoading = false;
				this.closeDialog(result);
			},
			error: err => {
				this.error.setError(true, err.error.message.message);
				this.isLoading = false;
			}
		});
	}

	private putRide(ride: Ride): void {
		ride['_id'] = this.data.ride._id;
		this.rideService.putRide(ride).subscribe({
			next: result => {
				this.isLoading = false;
				this.closeDialog(result);
			},
			error: err => {
				this.error.setError(true, err.error.message.message);
				this.isLoading = false;
			}
		});
	}
}
