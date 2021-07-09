import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RidesRoutingModule } from './rides-routing.module';
import { RidesScreenComponent } from './rides-screen/rides-screen.component';


@NgModule({
  declarations: [
    RidesScreenComponent
  ],
  imports: [
    CommonModule,
    RidesRoutingModule
  ]
})
export class RidesModule { }
