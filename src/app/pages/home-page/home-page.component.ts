import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BottomRowNavbarComponent } from '../../components/bottom-row-navbar/bottom-row-navbar.component';
import { PageContentsComponent } from '../../components/page-contents-home/page-contents.component';
import { NotificationSidenavComponent } from '../../components/notification-sidenav/notification-sidenav.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    BottomRowNavbarComponent,
    PageContentsComponent,
    NotificationSidenavComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomePageComponent {
  isSidenavOpen = false;

  toggleSidebar() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
