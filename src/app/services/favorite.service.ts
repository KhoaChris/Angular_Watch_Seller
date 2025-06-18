import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/json/products.model';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private favoriteItems: Product[] = [];
  private favoriteCountSubject = new BehaviorSubject<number>(0);
  favoriteCount$ = this.favoriteCountSubject.asObservable();

  addToFavorites(product: Product): void {
    // Prevent duplicates
    const exists = this.favoriteItems.find((p) => p.id === product.id);
    if (!exists) {
      this.favoriteItems.push(product);
      this.favoriteCountSubject.next(this.favoriteItems.length);
    }
  }

  getFavorites(): Product[] {
    return this.favoriteItems;
  }

  removeFavorite(productId: string | number): void {
    this.favoriteItems = this.favoriteItems.filter((p) => p.id !== productId);
    this.favoriteCountSubject.next(this.favoriteItems.length);
  }
}
