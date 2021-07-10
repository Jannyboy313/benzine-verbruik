import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SpinnerComponent } from 'src/shared/components/spinner/spinner.component';
import { ErrorSpanComponent } from './components/error-span/error-span.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    ErrorSpanComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    ErrorSpanComponent
  ],
})
export class SharedModule { }
