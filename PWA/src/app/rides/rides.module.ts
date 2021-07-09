import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RidesRoutingModule } from './rides-routing.module';

import { RidesScreenComponent } from './rides-screen/rides-screen.component';
import { RidesListComponent } from './rides-list/rides-list.component';
import { RideCardComponent } from './rides-list/ride-card/ride-card.component';
import { SpinnerComponent } from 'src/shared/components/spinner/spinner.component';


@NgModule({
  declarations: [
    RidesScreenComponent,
    RidesListComponent,
    RideCardComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RidesRoutingModule
  ]
})
export class RidesModule { }
