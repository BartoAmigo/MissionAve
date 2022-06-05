import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {path: 'home', component:HomePageComponent},
  {path: 'about', component:AboutPageComponent},
  {path: 'groups', component:GroupPageComponent},
  {path: 'login', component:LoginPageComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
