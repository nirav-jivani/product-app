import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product';
import { Input } from '@angular/core';
@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() viewDetails = new EventEmitter<number>();
  
  onViewDetails() {
    this.viewDetails.emit(this.product.id);
  }
}
