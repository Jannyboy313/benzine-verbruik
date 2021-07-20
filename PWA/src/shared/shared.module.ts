import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ErrorSpanComponent } from './components/error-span/error-span.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
	declarations: [ErrorSpanComponent, ConfirmDialogComponent],
	imports: [CommonModule, MatDialogModule],
	exports: [ErrorSpanComponent, ConfirmDialogComponent]
})
export class SharedModule {}
