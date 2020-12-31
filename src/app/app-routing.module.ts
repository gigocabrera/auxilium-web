import {LandingLayoutComponent} from "./shared/components/layouts/landing-layout/landing-layout.component";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {AuthLayoutComponent} from "./shared/components/layouts/auth-layout/auth-layout.component";

const routes: Routes = [
  /* {
    path: "",
    redirectTo: "welcome",
    pathMatch: "full",
  }, */
  {
    path: "",
    component: LandingLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./views/landing/landing.module").then((m) => m.LandingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
