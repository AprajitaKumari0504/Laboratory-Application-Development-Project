import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopbarComponent } from './topbar/topbar.component';

const routes: Routes = [
    {path:'',component:TopbarComponent},
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
