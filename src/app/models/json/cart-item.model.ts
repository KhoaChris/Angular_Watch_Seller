// models/cart-item.model.ts
import { Product } from '../json/products.model';

export interface CartItem extends Product {
  size: number;        
  quantity: number;
}
