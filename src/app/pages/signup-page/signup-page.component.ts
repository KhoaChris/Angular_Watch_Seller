import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PageContentsSignupComponent } from '../../components/page-contents-signup/page-contents-signup.component';
import { BottomRowNavbarComponent } from '../../components/bottom-row-navbar/bottom-row-navbar.component';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    PageContentsSignupComponent,
    BottomRowNavbarComponent,
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SignupPageComponent {}
