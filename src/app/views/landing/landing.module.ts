
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
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LeftImageComponent } from './components/left-image/left-image.component';
import { TeamComponent } from './components/team/team.component';
import { NewsComponent } from './components/news/news.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { NewsTwoComponent } from './components/news-two/news-two.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';

import { AuxHeaderComponent } from './components/aux-header/aux-header.component';
import { AuxAboutComponent } from './components/aux-about/aux-about.component';
import { AuxIntroComponent } from './components/aux-intro/aux-intro.component';
import { AuxServicesComponent } from './components/aux-services/aux-services.component';
import { AuxTechnologiesComponent } from './components/aux-technologies/aux-technologies.component';
import { AuxTestimonialComponent } from './components/aux-testimonial/aux-testimonial.component';

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
    ContactFormComponent,
    FooterComponent,
    HomeComponent,
    LeftImageComponent,
    TeamComponent,
    NewsComponent,
    FaqsComponent,
    NewsTwoComponent,
    ScrollToDirective,
    BlogDetailsComponent,
    BlogDetailsPageComponent,
    AuxHeaderComponent,
    AuxIntroComponent,
    AuxAboutComponent,
    AuxServicesComponent,
    AuxTechnologiesComponent,
    AuxTestimonialComponent
  ],
  providers: [WINDOW_PROVIDERS]

  // exports: ScrollToDirective
})
export class LandingModule {}
