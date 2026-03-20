import { Component } from '@angular/core';
import { Cart } from '../../model/cart.model';
@Component({
  selector: 'app-cart-detail',
  standalone: false,
  templateUrl: './cart-detail.html',
  styleUrl: './cart-detail.css',
})
export class CartDetail {
constructor(public cart:Cart){}
getValue(lineProduct: any, event: Event): void {
    let val = (event.target as HTMLInputElement).value;
    this.cart.updateQuantity(lineProduct, +val);
  }

}
