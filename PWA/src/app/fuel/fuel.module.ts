import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelscreenComponent } from './fuelscreen/fuelscreen.component';
import { FuelRoutingModule } from './fuel-routing.module';


@NgModule({
  declarations: [
    FuelscreenComponent
  ],
  imports: [
    CommonModule,
    FuelRoutingModule
  ]
})
export class FuelModule { }
