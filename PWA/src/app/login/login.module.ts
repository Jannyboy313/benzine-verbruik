import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { FormInputComponent } from './form-input/form-input.component';

import { UserService } from 'src/shared/Services/db/user.service';
import { DataStorageService } from 'src/shared/Services/data-storage.service';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
	declarations: [LoginScreenComponent, FormInputComponent],
	imports: [CommonModule, LoginRoutingModule, SharedModule],
	providers: [UserService, DataStorageService]
})
export class LoginModule {}
