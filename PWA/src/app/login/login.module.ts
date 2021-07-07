import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LoginInputComponent } from './login-input/login-input.component';



@NgModule({
  declarations: [
    LoginInputComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
