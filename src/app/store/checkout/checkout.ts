import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { OrderRepository } from "../../model/order.repository";
import { Order } from "../../model/order.model";

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class Checkout implements OnInit {
ngOnInit(): void {
  
}
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public repository: OrderRepository,
    public order: Order) { }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }

}