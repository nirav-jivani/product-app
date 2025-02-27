import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products = signal<Product[]>([]);
  productService = inject(ProductService);
  router = inject(Router);

  ngOnInit(): void {
    this.productService.getProducts().subscribe(product => {
      this.products.set(product);
    });
  }
  viewProduct(id: number) {
    this.router.navigate(['/products', id]);
  }
  
}
