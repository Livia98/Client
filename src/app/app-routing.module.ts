import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';



const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/app-root', pathMatch: 'full' },
  { path: '**', component: LandingpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
