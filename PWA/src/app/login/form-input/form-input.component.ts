import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() formName: String = '';

  isError: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
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
