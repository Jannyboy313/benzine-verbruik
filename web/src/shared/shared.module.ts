import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
	declarations: [ConfirmDialogComponent, FilterComponent],
	imports: [CommonModule, MatDialogModule],
	exports: [ConfirmDialogComponent, FilterComponent]
})
export class SharedModule {}
