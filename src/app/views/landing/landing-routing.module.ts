import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuxHomeComponent } from './aux-home/aux-home.component';

const routes: Routes = [
  {
    path: "",
    component: AuxHomeComponent
  },
  {
    path: "home",
    component: AuxHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
