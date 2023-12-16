import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageContentsComponent } from './components/page-contents-home/page-contents.component';
import { BottomRowNavbarComponent } from './components/bottom-row-navbar/bottom-row-navbar.component';
import { AddressNavbarService } from './components/address-navbar/address-navbar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    PageContentsComponent,
    BottomRowNavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private addressNavbarService: AddressNavbarService) {}
  title = 'Angular2';
  getPageTitle(): string {
    return this.addressNavbarService.getPageTitle();
  }
}
