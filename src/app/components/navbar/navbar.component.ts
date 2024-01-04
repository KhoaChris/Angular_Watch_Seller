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
import { PopupService } from '../popup/popup.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatBadgeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NavbarComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private popupService: PopupService
  ) {}

  isLogin = false;
  users = require('../../models/json/users.json');

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

  getAvatarSrc(): string {
    // Get the stored imgURL from localStorage
    const imgURL = localStorage.getItem('imgURL');

    // Check if imgURL is available, if not, provide a default image or handle it accordingly
    return imgURL ? imgURL : 'path_to_default_avatar_image';
  }


  async logOut() {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('account');
    this.popupService.openPopup('You have successfully log out');

    // Delay for 2 seconds before reloading the page
    await this.delay(1000);

    window.location.reload();
    this.router.navigate(['']);
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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

  navToAccessories() {
    this.router.navigate(['Accessories']);
  }

  alertFalse() {
    this.popupService.openPopup('Please login first to use this function');
  }
}
