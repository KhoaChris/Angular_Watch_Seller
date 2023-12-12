import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PageContentsLoginComponent } from '../../components/page-contents-login/page-contents-login.component';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    PageContentsLoginComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LoginPageComponent { }
