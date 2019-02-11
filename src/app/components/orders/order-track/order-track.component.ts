import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Order } from '../order.modal';
import { OrderService } from '../order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-track',
  templateUrl: './order-track.component.html',
  styleUrls: ['./order-track.component.css']
})
export class OrderTrackComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  constructor(private orderService: OrderService,
      private router: Router) { }

  ngOnInit() {
  }

  onTrackSubmit(form: NgForm){
    this.subscription.add(this.orderService.getOrderByID(form.value.orderNumber).subscribe(
      (order: Order) => {
        if(order['_id']){
          this.orderService.selectedOrder = order;
          this.router.navigate(['/orders', order['_id']]);
        }else {
          alert(order['message']);
        }
        form.reset();
      }
    ));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
