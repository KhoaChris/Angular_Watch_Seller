import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../models/json/products.model';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/json/cart-item.model';

@Component({
  selector: 'app-product-info-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule],
  templateUrl: './product-info-dialog.component.html',
  styleUrl: './product-info-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProductInfoDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private dialogRef: MatDialogRef<ProductInfoDialogComponent>,
    private cartService: CartService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  // selectedStrapSize: number = 0;
  // quantity = 1;

  // selectStrapSize(size: number): void {
  //   this.selectedStrapSize = size;
  // }

  // increaseQty(): void {
  //   this.quantity++;
  // }

  // decreaseQty(): void {
  //   if (this.quantity > 1) this.quantity--;
  // }

  // addToCart(product: Product): void {
  //   const item: CartItem = {
  //     ...product,
  //     size: this.selectedStrapSize,
  //     quantity: this.quantity,
  //   };

  //   this.cartService.addToCart(item);
  //   this.dialogRef.close();
  // }
}
