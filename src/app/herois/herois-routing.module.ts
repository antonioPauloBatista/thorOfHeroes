import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroisComponent } from './components/herois/herois.component';
import { HeroDatailComponent } from './components/hero-datail/hero-datail.component';

const routes: Routes = [
  { path: "herois", component: HeroisComponent },
  { path: "herois/:id", component: HeroDatailComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroisRoutingModule { }
