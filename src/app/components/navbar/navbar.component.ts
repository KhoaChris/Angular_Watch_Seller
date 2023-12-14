import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NavbarComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  isLogin = false;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedData = window.localStorage.getItem('isLogin');
      if (storedData) {
        this.isLogin = true;
      }
    } else {
      console.log('You must active in the browser');
    }
  }

  logOut() {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('account');
    window.location.reload();
    this.router.navigate(['']);
    alert('You have logged out');
  }

  navToHome() {
    this.router.navigate(['']);
  }

  navToLogin() {
    this.router.navigate(['Login']);
  }

  navToWatches() {
    this.router.navigate(['Watches']);
  }

  navToAboutUs() {
    this.router.navigate(['About-Us']);
  }
}
