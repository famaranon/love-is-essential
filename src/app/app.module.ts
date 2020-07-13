import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShareComponent } from './components/share/share.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingComponent } from './components/landing/landing.component';
import { StoriesComponent } from './components/stories/stories.component';
import { PetitionComponent } from './components/petition/petition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './components/footer/footer.component';
import { CommunityComponent } from './components/community/community.component';
import { PressComponent } from './components/press/press.component';
import { ImageService } from './services/image.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GoogleAnalyticsService } from './services/google-analytics.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShareComponent,
    LandingComponent,
    StoriesComponent,
    PetitionComponent,
    FooterComponent,
    CommunityComponent,
    PressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    SlickCarouselModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [
    ImageService,
    GoogleAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
