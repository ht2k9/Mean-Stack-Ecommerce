import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order.modal';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../order.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order: Order;
  isAdmin: any;
  formattedExp = {date_req: '', phone:''};

  constructor(private route: ActivatedRoute,
      private orderService: OrderService,
      private sharedService: SharedService) { }

  ngOnInit() {
    this.isAdmin = this.sharedService.adminLogged;
    this.route.params.subscribe(
      (params: Params) => {
        this.order = this.orderService.selectedOrder;
        if(!this.order){
          this.orderService.getOrderByID(params.id).subscribe((data: Order) => {
            this.order = data;  
            this.formattedExp = {
              date_req: this.orderService.formatDate(this.order.date_required),
              phone: this.orderService.formatPhone(this.order.costumer.phone.toString())
            };
          });
        }
      }
    )
  }

  onChangeStatus(status: string){
    this.orderService.editOrder({'status': status}, this.order['_id']).subscribe((data) => {
      console.log(data);
      this.order.status = status;
    });
  }

}
