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
import { EventSliderComponent } from './pages/home-page/components/event-slider/event-slider.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/group/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AboutPageComponent,
    LoginPageComponent,
    GroupPageComponent,
    EventSliderComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
