import { Component } from '@angular/core';
import { Order } from '../../model/order.model';
import { OrderRepository } from '../../model/order.repository';
@Component({
  selector: 'app-order-table',
  standalone: false,
  templateUrl: './order-table.html',
  styleUrl: './order-table.css',
})
export class OrderTable {
  includeShipped = false;

  constructor(private repository: OrderRepository) { }

  getOrders(): Order[] {
    return this.repository.getOrders()
      .filter(o => this.includeShipped || !o.shipped);
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }

  delete(id: number|undefined) {
    if(id!=undefined)
    this.repository.deleteOrder(id);
  }

}
