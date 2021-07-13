import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelscreenComponent } from './fuelscreen/fuelscreen.component';
import { FuelRoutingModule } from './fuel-routing.module';
import { FuelListComponent } from './fuel-list/fuel-list.component';
import { FuelCardComponent } from './fuel-list/fuel-card/fuel-card.component';


@NgModule({
  declarations: [
    FuelscreenComponent,
    FuelListComponent,
    FuelCardComponent
  ],
  imports: [
    CommonModule,
    FuelRoutingModule
  ]
})
export class FuelModule { }
