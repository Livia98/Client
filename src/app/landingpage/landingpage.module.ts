import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageRoutingModule } from './landingpage-routing.module';
import { LandingpageComponent } from './landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';


@NgModule({
  declarations: [RegistrationComponent, LoginComponent, LandingpageComponent],
  imports: [
    CommonModule,
    LandingpageRoutingModule
  ]
})
export class LandingpageModule { }
