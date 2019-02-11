import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../order.modal';
import { OrderService } from '../order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  orders: Order[];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.subscription.add(this.orderService.getOrders().subscribe((data: Order[]) => {
      this.orders = data; 
    }));
  }

  onManageOrder(index: number){
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
