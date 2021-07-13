import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelScreenComponent } from './fuel-screen/fuel-screen.component';
import { FuelRoutingModule } from './fuel-routing.module';
import { FuelListComponent } from './fuel-list/fuel-list.component';
import { FuelCardComponent } from './fuel-list/fuel-card/fuel-card.component';


@NgModule({
	declarations: [FuelScreenComponent, FuelListComponent, FuelCardComponent],
	imports: [CommonModule, FuelRoutingModule]
})
export class FuelModule {}
