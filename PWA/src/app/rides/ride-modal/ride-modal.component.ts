import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-ride-modal',
	templateUrl: './ride-modal.component.html',
	styleUrls: ['./ride-modal.component.scss']
})
export class RideModalComponent implements OnInit {
	isError: boolean = false;

	form: FormGroup = new FormGroup({
		title: new FormControl(''),
		description: new FormControl(''),
		distance: new FormControl()
	});

	constructor(
		public dialogRef: MatDialogRef<any>,
		@Inject(MAT_DIALOG_DATA)
		public data: any = {
			header: 'Aanmaken nieuwe rit',
			title: ''
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

	onNoClick(): void {
		this.dialogRef.close();
	}

	getActionName(): string {
		return this.data.header.split(' ')[0];
	}

  onSubmit(): void {

  }
}
