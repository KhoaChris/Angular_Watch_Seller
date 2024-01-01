import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { WatchesPageComponent } from './pages/watches-page/watches-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { HublotPageComponent } from './pages/hublot-page/hublot-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AccessoriesPageComponent } from './pages/accessories-page/accessories-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
  { path: 'Home', component: HomePageComponent }, // Updated default route
  { path: '', redirectTo: 'Home', pathMatch: 'full' }, // Redirect from empty path to 'Home'
  { path: 'Login', component: LoginPageComponent },
  { path: 'Signup', component: SignupPageComponent },
  { path: 'Watches', component: WatchesPageComponent },
  { path: 'About-Us', component: AboutUsPageComponent },
  { path: 'Watches/Hublot', component: HublotPageComponent },
  { path: 'Accessories', component: AccessoriesPageComponent },
  { path: 'Contact', component: ContactPageComponent },
  {path: '**', component: NotFoundPageComponent}
];
