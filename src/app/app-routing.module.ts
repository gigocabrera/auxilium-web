import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogOneComponent } from './components/pages/blog-one/blog-one.component';
import { BlogTwoComponent } from './components/pages/blog-two/blog-two.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ErrorComponent } from './components/pages/error/error.component';

import { AuxHomeComponent } from './components/pages/aux-home/aux-home.component';

const routes: Routes = [
    {path: '', component: AuxHomeComponent},
    {path: 'blog-1', component: BlogOneComponent},
    {path: 'blog-2', component: BlogTwoComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'error', component: ErrorComponent},
    {path: "**", redirectTo: ""}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }