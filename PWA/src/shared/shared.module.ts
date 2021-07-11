import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BottomNavModule } from 'ngx-bottom-nav';

import { ErrorSpanComponent } from './components/error-span/error-span.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';

@NgModule({
  declarations: [
    ErrorSpanComponent,
    ConfirmDialogComponent,
    BottomNavigationComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    BottomNavModule
  ],
  exports: [
    ErrorSpanComponent,
    ConfirmDialogComponent
  ],
})
export class SharedModule { }
