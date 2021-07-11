import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RidesRoutingModule } from './rides-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { RidesScreenComponent } from './rides-screen/rides-screen.component';
import { RidesListComponent } from './rides-list/rides-list.component';
import { RideCardComponent } from './rides-list/ride-card/ride-card.component';
import { RideService } from 'src/shared/Services/db/ride.service';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    RidesScreenComponent,
    RidesListComponent,
    RideCardComponent
  ],
  imports: [
    CommonModule,
    RidesRoutingModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  providers: [
    RideService
  ]
})
export class RidesModule { }
