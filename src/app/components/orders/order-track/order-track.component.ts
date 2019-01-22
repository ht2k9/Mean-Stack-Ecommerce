import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { Order } from '../order.modal';

@Component({
  selector: 'app-order-track',
  templateUrl: './order-track.component.html',
  styleUrls: ['./order-track.component.css']
})
export class OrderTrackComponent implements OnInit {
  constructor(private orderService: OrderService,
      private router: Router) { }

  ngOnInit() {
  }

  onTrackSubmit(form: NgForm){
    this.orderService.getOrderByID(form.value.orderNumber).subscribe(
      (order: Order) => {
        if(order['_id']){
          this.orderService.selectedOrder = order;
          this.router.navigate(['/orders', order['_id']]);
        }else {
          alert(order['message']);
        }
        form.reset();
      }
    );
  }

}
