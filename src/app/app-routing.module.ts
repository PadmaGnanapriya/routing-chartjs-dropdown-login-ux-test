import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninSignupComponent} from './signin-signup/signin-signup.component';

const routes: Routes = [
  {path: '', component: SigninSignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
