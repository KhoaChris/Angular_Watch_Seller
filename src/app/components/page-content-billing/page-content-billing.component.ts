import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/json/products.model';

@Component({
  selector: 'app-page-content-billing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-content-billing.component.html',
  styleUrl: './page-content-billing.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentBillingComponent implements OnInit {
  cart: (Product & { size: number; quantity: number })[] = [];
  subtotal: number = 0;
  tax: number = 0;
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // this.cart = this.cartService.getCartItems();
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.subtotal = this.cart.reduce((acc, item) => {
      const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ''));
      return acc + numericPrice * item.quantity;
    }, 0);
    this.tax = this.subtotal * 0.07;
    this.total = this.subtotal + this.tax;
  }
}
