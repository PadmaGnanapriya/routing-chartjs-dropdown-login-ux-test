import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninSignupComponent} from './signin-signup/signin-signup.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'login', component: SigninSignupComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
