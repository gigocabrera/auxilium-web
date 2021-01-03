import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "blog-details",
    component: BlogDetailsPageComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
