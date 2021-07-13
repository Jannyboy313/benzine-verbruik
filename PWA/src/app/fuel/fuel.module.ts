import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelscreenComponent } from './fuelscreen/fuelscreen.component';
import { FuelRoutingModule } from './fuel-routing.module';
import { FuelListComponent } from './fuel-list/fuel-list.component';


@NgModule({
  declarations: [
    FuelscreenComponent,
    FuelListComponent
  ],
  imports: [
    CommonModule,
    FuelRoutingModule
  ]
})
export class FuelModule { }
