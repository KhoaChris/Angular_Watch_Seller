import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HUBLOT_PRODUCTS } from '../../../data/products-hublot';
import { Product } from '../../models/json/products.model';
import { PopupService } from '../popup/popup.service';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';
import { FavoriteService } from '../../services/favorite.service';
import { ProductInfoDialogComponent } from '../product-info-dialog/product-info-dialog.component';

@Component({
  selector: 'app-page-contents-watches-hublot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-contents-watches-hublot.component.html',
  styleUrl: './page-contents-watches-hublot.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsWatchesHublotComponent {
  products = HUBLOT_PRODUCTS;

  favorites: Product[] = [];
  cart: Product[] = [];
  cartCount = 0;

  constructor(
    private popupService: PopupService,
    private dialog: MatDialog,
    private cartService: CartService,
    private favoriteService: FavoriteService
  ) {}

  addToFavorites(product: Product) {
    this.favoriteService.addToFavorites(product);
    this.popupService.openPopup(`${product.name} added to favorites`);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.popupService.openPopup(`${product.name} added to cart`);
  }

  openInfoModal(product: Product): void {
    console.log('Opening modal for:', product); 

    this.dialog.open(ProductInfoDialogComponent, {
      data: product,
      width: '550px',
      panelClass: 'info-dialog',
    });
  }
}
