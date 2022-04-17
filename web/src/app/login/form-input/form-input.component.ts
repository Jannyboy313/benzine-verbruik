import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-form-input',
	templateUrl: './form-input.component.html',
	styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
	@Input() public formName: string = '';
	@Input() public isError: boolean = false;
	@Output() public formData = new EventEmitter<string>();

	constructor() {}

	public ngOnInit(): void {}

	public emitFormData(event: any) {
		this.formData.emit(event.target.value);
	}

	public getEnglishName(): string {
		if (this.formName.toLowerCase() !== 'wachtwoord') {
			return 'email';
		}
		return 'password';
	}

	public isEmail(): boolean {
		if (this.formName.toLowerCase() === 'email') {
			return true;
		}
		return false;
	}
}
