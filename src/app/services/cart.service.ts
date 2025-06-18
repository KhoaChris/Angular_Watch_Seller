// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/json/products.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: Product[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cartCountSubject.next(this.cartItems.length);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }
}
