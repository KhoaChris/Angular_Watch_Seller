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

  navToHome() {
    this.router.navigate(['']);
  }

  navToLogin() {
    this.router.navigate(['/LOGIN']);
  }
}
