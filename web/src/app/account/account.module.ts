import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountScreenComponent } from './account-screen/account-screen.component';

import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [
    AccountScreenComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
