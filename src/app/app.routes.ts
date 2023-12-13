import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

export const routes: Routes = [{ path: '', component: HomePageComponent }, {path: 'Login', component: LoginPageComponent}, {path: 'Signup', component: SignupPageComponent}];

