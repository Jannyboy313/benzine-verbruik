import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
	declarations: [ConfirmDialogComponent],
	imports: [CommonModule, MatDialogModule],
	exports: [ConfirmDialogComponent]
})
export class SharedModule {}
