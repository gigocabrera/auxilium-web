
import { ScrollToDirective } from './helpers/scrollTo.directives';
import { WINDOW_PROVIDERS } from './helpers/window.helpers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from "@ngu/carousel";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingRoutingModule } from './landing-routing.module';
import { Works1Component } from './components/works1/works1.component';
import { Works2Component } from './components/works2/works2.component';
import { PricingOneComponent } from './components/pricing-one/pricing-one.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LeftImageComponent } from './components/left-image/left-image.component';
import { TeamComponent } from './components/team/team.component';
import { NewsComponent } from './components/news/news.component';
import { NewsTwoComponent } from './components/news-two/news-two.component';
import { FormsModule } from '@angular/forms';

import { AuxHeaderComponent } from './components/aux-header/aux-header.component';
import { AuxAboutComponent } from './components/aux-about/aux-about.component';
import { AuxIntroComponent } from './components/aux-intro/aux-intro.component';
import { AuxServicesComponent } from './components/aux-services/aux-services.component';
import { AuxTechnologiesComponent } from './components/aux-technologies/aux-technologies.component';
import { AuxTestimonialComponent } from './components/aux-testimonial/aux-testimonial.component';
import { AuxContactFormComponent } from './components/aux-contact-form/aux-contact-form.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    NguCarouselModule,
    NgbModule,

    FormsModule
  ],
  declarations: [
    Works1Component,
    Works2Component,
    PricingOneComponent,
    FooterComponent,
    HomeComponent,
    LeftImageComponent,
    TeamComponent,
    NewsComponent,
    NewsTwoComponent,
    ScrollToDirective,
    AuxHeaderComponent,
    AuxIntroComponent,
    AuxAboutComponent,
    AuxServicesComponent,
    AuxTechnologiesComponent,
    AuxTestimonialComponent,
    AuxContactFormComponent
  ],
  providers: [WINDOW_PROVIDERS]

  // exports: ScrollToDirective
})
export class LandingModule {}
