import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {AppRoutingModule} from "./app-routing-module";
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { SliderComponent } from './pages/home-page/slider/slider.component';
import { GroupSliderComponent } from './pages/home-page/slider/group-slider/group-slider.component';
import { EventSliderComponent } from './pages/home-page/slider/event-slider/event-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AboutPageComponent,
    LoginPageComponent,
    GroupPageComponent,
    SliderComponent,
    GroupSliderComponent,
    EventSliderComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
