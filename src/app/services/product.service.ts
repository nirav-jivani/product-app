import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop with advanced features and design' },
    { id: 2, name: 'Phone', price: 499, description: 'Latest smartphone with advanced camera features' },
    { id: 3, name: 'Headphones', price: 99, description: 'Noise-canceling headphones with great sound quality' }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products); 
  }
  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}
