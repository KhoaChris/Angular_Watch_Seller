import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NavbarComponent {
  constructor(private router: Router) {}

  token = 0;

  navToHome() {
    this.router.navigate(['']);
  }

  navToLogin() {
    this.router.navigate(['Login']);
  }

  navToWatches() {
    this.router.navigate(['Watches']);
  }

  handleClickLogin() {
    this.token = 1;
    alert('You have successfully logged in.');
    console.log(this.token);
  }

  handleClickLogout() {
    this.token = 0;
    alert('You have successfully logged out.');
    console.log(this.token);
  }
}
