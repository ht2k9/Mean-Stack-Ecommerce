import { Component, OnInit } from '@angular/core';
import { Order } from '../order.modal';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe((data: Order[]) => {
      this.orders = data; 
    });
  }

  onManageOrder(index: number){
    
  }
}
