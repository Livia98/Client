import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegistrationComponent } from './landingpage/registration/registration.component';
import { LoginComponent } from './landingpage/login/login.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { OverallListComponent } from './dashboard/overall-list/overall-list.component';


const routes: Routes = [
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
  { path: '**', component: LandingpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
