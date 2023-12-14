import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { WatchesPageComponent } from './pages/watches-page/watches-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'Login', component: LoginPageComponent },
  { path: 'Signup', component: SignupPageComponent },
  { path: 'Watches', component: WatchesPageComponent },
  { path: 'About-Us', component: AboutUsPageComponent}
];
