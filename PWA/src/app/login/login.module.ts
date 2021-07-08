import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ErrorSpanComponent } from 'src/shared/components/error-span/error-span.component';
import { SpinnerComponent } from 'src/shared/components/spinner/spinner.component';

import { UserService } from 'src/shared/Services/db/user.service';
import { DataStorageService } from 'src/shared/Services/data-storage.service';



@NgModule({
  declarations: [
    LoginScreenComponent,
    FormInputComponent,
    ErrorSpanComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  providers: [
    UserService,
    DataStorageService

  ]
})
export class LoginModule { }
