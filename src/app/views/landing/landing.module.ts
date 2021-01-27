import { ScrollToDirective } from './helpers/scrollTo.directives';
import { WINDOW_PROVIDERS } from './helpers/window.helpers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from "@ngu/carousel";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import { AuxHeaderComponent } from './components/aux-header/aux-header.component';
import { AuxAboutComponent } from './components/aux-about/aux-about.component';
import { AuxIntroComponent } from './components/aux-intro/aux-intro.component';
import { AuxServicesComponent } from './components/aux-services/aux-services.component';
import { AuxTechnologiesComponent } from './components/aux-technologies/aux-technologies.component';
import { AuxTestimonialComponent } from './components/aux-testimonial/aux-testimonial.component';
import { AuxContactFormComponent } from './components/aux-contact-form/aux-contact-form.component';
import { AuxWeProvideComponent } from './components/aux-we-provide/aux-we-provide.component';
import { AuxTeamComponent } from './components/aux-team/aux-team.component';
import { AuxWorksComponent } from './components/aux-works/aux-works.component';
import { AuxFooterComponent } from './components/aux-footer/aux-footer.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    NguCarouselModule,
    NgbModule,

    FormsModule
  ],
  declarations: [
    HomeComponent,
    ScrollToDirective,
    AuxHeaderComponent,
    AuxIntroComponent,
    AuxAboutComponent,
    AuxServicesComponent,
    AuxTechnologiesComponent,
    AuxTestimonialComponent,
    AuxContactFormComponent,
    AuxWeProvideComponent,
    AuxTeamComponent,
    AuxWorksComponent,
    AuxFooterComponent
  ],
  providers: [WINDOW_PROVIDERS]

  // exports: ScrollToDirective
})
export class LandingModule {}
