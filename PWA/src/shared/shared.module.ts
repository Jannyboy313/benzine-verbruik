import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ScrollDirective } from './directives/scroll.directive';

@NgModule({
	declarations: [ConfirmDialogComponent, ScrollDirective],
	imports: [CommonModule, MatDialogModule],
	exports: [ConfirmDialogComponent, ScrollDirective]
})
export class SharedModule {}
