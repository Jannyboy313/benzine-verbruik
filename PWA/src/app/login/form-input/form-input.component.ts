import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() formName: String = '';
  @Input() isError: boolean = false;

  @Output() formData = new EventEmitter<String>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitFormData(event: any) {
    this.formData.emit(event.target.value);
  }

  getEnglishName(): String {
    if (this.formName.toLowerCase() !== 'wachtwoord') {
      return 'email';
    }
    return "password";
  }

  isEmail(): boolean {
    if (this.formName.toLowerCase() === 'email') {
      return true;
    }
    return false;
  }

}
