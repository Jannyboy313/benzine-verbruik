import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelRoutingModule } from './fuel-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FuelScreenComponent } from './fuel-screen/fuel-screen.component';
import { FuelListComponent } from './fuel-list/fuel-list.component';
import { FuelCardComponent } from './fuel-list/fuel-card/fuel-card.component';
import { FuelModalComponent } from './fuel-modal/fuel-modal.component';

import { FuelService } from 'src/shared/Services/db/fuel.service';

@NgModule({
	declarations: [
		FuelScreenComponent,
		FuelListComponent,
		FuelCardComponent,
		FuelModalComponent
	],
	imports: [
		CommonModule,
		FuelRoutingModule,
		SharedModule,
		MatDialogModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [FuelService]
})
export class FuelModule {}
