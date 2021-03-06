import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule) },
  { path: 'landingpage', loadChildren: () => import('./landingpage/landingpage.module').then(module => module.LandingpageModule) },
  { path: 'overview', loadChildren: () => import('./overview/overview.module').then(module => module.OverviewModule) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
