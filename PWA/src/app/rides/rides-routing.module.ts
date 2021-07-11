import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RidesScreenComponent } from './rides-screen/rides-screen.component';

const routes: Routes = [
  {
    path: '',
    component: RidesScreenComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RidesRoutingModule { }
