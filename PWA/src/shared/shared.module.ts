import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorSpanComponent } from './components/error-span/error-span.component';

@NgModule({
  declarations: [
    ErrorSpanComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorSpanComponent
  ],
})
export class SharedModule { }
