import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';



const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  // { path: 'registration', component: RegistrationComponent },
  // { path: '', redirectTo: '/app-root', pathMatch: 'full' },
  // { path: '**', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
