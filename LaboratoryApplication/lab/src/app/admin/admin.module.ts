import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SamplesComponent } from './samples/samples.component';


@NgModule({
  declarations: [SamplesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports:[
    SamplesComponent
  ]
})
export class AdminModule { }
