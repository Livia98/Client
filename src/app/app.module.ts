import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { RegistrationComponent } from './landingpage/registration/registration.component';
import { LoginComponent } from './landingpage/login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { TodolistComponent } from './overview/todolist/todolist.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverallListComponent } from './Dashboard/overall-list/overall-list.component';
import { AnalyticsComponent } from './Dashboard/analytics/analytics.component';
import { ListComponent } from './overview/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    OverviewComponent,
    TodolistComponent,
    LandingpageComponent,
    DashboardComponent,
    OverallListComponent,
    AnalyticsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
