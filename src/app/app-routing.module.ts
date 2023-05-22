import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: 'full' },
  { path: "dashboard", loadChildren: () => import('./compenents/dashboard/dashboard.module').then((m) => m.DashboardModule) },
  { path: "herois", loadChildren: () => import('./compenents/herois/herois.module').then((m) => m.HeroisModule) },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
