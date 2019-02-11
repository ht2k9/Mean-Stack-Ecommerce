import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/internal/Subscription';

import { Order } from 'src/app/components/orders/order.modal';
import { Product } from 'src/app/components/products/product.modal';
import { SharedService } from '../../shared.service';
import { OrderService } from 'src/app/components/orders/order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  products: Product[];

  constructor(private sharedSrv: SharedService,
      private orderService: OrderService) { }

  ngOnInit() {
    this.products = this.sharedSrv.getCartItems();
  }

  onOrderSubmit(form: NgForm){
    const {name, phone, email, address, date_required} = form.value;
    const values = new Order (
      {name, phone, email, address},
      'pending',
      date_required,
      this.products
    );

    this.subscription.add(this.orderService.addOrder(values).subscribe(
      (data: Order) => {
        console.log(data);
      }
    ));
  }

  removeProduct(index: number){
    this.products.splice(index, 1);
    this.sharedSrv.cartItems
    .splice(index, 1);
  }
      
  getTotalPrice(){
    let sum = 0;
    this.products.forEach(product => {
      sum += product.price;
    });
    return sum;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
