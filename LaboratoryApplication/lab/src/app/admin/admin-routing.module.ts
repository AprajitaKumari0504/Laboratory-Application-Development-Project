import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplesComponent } from './samples/samples.component';


const routes: Routes = [
  // {path:'samples',component:SamplesComponent}
  {   path: 'admin',   
      component: SamplesComponent,
  children :[
      { path: 'samples', component: SamplesComponent},

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
