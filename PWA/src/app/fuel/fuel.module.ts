import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelScreenComponent } from './fuel-screen/fuel-screen.component';
import { FuelRoutingModule } from './fuel-routing.module';
import { FuelListComponent } from './fuel-list/fuel-list.component';
import { FuelCardComponent } from './fuel-list/fuel-card/fuel-card.component';
import { SharedModule } from 'src/shared/shared.module';
import { FuelService } from 'src/shared/Services/db/fuel.service';

@NgModule({
	declarations: [FuelScreenComponent, FuelListComponent, FuelCardComponent],
	imports: [CommonModule, FuelRoutingModule, SharedModule],
	providers: [FuelService]
})
export class FuelModule {}
