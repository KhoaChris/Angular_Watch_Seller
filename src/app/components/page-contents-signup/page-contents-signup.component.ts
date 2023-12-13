import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-contents-signup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-contents-signup.component.html',
  styleUrl: './page-contents-signup.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsSignupComponent {
  constructor(private router: Router) {}

  token = 0;

  navToLogIn() {
    this.router.navigate(['/Login']);
  }

  handleClick() {
    this.token = 1;
    alert('You have successfully signed up. Redirecting back to Login page.');
    this.router.navigate(['/Login']);
  }
}
