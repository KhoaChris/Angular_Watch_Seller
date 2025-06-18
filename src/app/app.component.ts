import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterOutlet,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { AddressNavbarService } from './components/address-navbar/address-navbar.service';
import { LoaderComponent } from './components/loading/loading.component';
import { LoadingService } from './components/loading/loading.service'; // import service
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { FavoriteService } from './services/favorite.service';
import { Product } from './models/json/products.model';
import { SidenavService } from './services/sidenav.service';
import { WebVitalsService } from './services/web-vitals.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoaderComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public chartLabels: string[] = [];
  public chartData: number[] = [];
  public chartType = 'bar';
  popupService: any;
  constructor(
    private addressNavbarService: AddressNavbarService,
    private router: Router,
    private loadingService: LoadingService,
    private favoriteService: FavoriteService,
    private sidenavService: SidenavService,
    private vitalsService: WebVitalsService
  ) {}

  favorites: Product[] = [];

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loadingService.show();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loadingService.hide();
      }
    });

    this.favorites = this.favoriteService.getFavorites();
  }

  getPageTitle(): string {
    return this.addressNavbarService.getPageTitle();
  }

  @ViewChild('favoritesDrawer') favoritesDrawer!: MatSidenav;

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.favoritesDrawer);
  }

  removeFromFavorites(product: Product) {
    this.favoriteService.removeFavorite(product.id);
    this.favorites = this.favoriteService.getFavorites();

    this.popupService.openPopup(
      `${product.name} removed from favorites`,
      'error'
    );
  }
}
