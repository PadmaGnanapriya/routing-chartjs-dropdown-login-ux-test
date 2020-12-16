import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SigninSignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
