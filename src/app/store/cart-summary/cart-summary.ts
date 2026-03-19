import { Component } from '@angular/core';
import { Cart } from '../../model/cart.model';
@Component({
  selector: 'app-cart-summary',
  standalone: false,
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
})
export class CartSummary {
constructor(public cart: Cart) { }
}
