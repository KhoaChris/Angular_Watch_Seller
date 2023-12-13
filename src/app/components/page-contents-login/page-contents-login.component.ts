import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-contents-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-contents-login.component.html',
  styleUrl: './page-contents-login.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsLoginComponent {
  constructor(private router: Router) {}

  token = 0;

  navToSignUp() {
    this.router.navigate(['/Signup']);
  }

  handleClickMe() {
    this.token = 1;
    alert('You have successfully logged in, redirecting to Home page.');
    this.router.navigate(['']);
  }
}
