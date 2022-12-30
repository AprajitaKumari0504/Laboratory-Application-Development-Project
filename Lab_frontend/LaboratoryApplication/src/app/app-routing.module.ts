import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntersamplesComponent } from './entersamples/entersamples.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SamplesComponent } from './samples/samples.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegisterComponent},
  {path:"samples",component:SamplesComponent},
  {path:"entersamples",component:EntersamplesComponent},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
