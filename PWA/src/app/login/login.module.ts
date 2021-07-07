import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ErrorSpanComponent } from 'src/shared/components/error-span/error-span.component';



@NgModule({
  declarations: [
    LoginScreenComponent,
    FormInputComponent,
    ErrorSpanComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
