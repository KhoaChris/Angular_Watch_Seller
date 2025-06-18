export interface Product {
  id: number;
  name: string;
  collection: string;
  price: string;
  imageUrl: string;
  description: string;
  rating: number; 
  reviews: number; 
  sizes: number[]; 
}
