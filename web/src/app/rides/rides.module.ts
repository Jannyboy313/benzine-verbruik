import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RidesRoutingModule } from './rides-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RidesScreenComponent } from './rides-screen/rides-screen.component';
import { RidesListComponent } from './rides-list/rides-list.component';
import { RideCardComponent } from './rides-list/ride-card/ride-card.component';
import { RideService } from 'src/shared/Services/db/ride.service';
import { FilterService } from 'src/shared/Services/filter.service';
import { SharedModule } from 'src/shared/shared.module';
import { RideModalComponent } from './ride-modal/ride-modal.component';

@NgModule({
	declarations: [
		RidesScreenComponent,
		RidesListComponent,
		RideCardComponent,
		RideModalComponent
	],
	imports: [
		CommonModule,
		RidesRoutingModule,
		SharedModule,
		MatDialogModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [RideService, FilterService]
})
export class RidesModule {}
