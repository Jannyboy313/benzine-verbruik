import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { FormInputComponent } from './form-input/form-input.component';



@NgModule({
  declarations: [
    LoginScreenComponent,
    FormInputComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
