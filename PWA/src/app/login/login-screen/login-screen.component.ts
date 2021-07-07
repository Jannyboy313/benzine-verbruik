import { Component, OnInit } from '@angular/core';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  isError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
