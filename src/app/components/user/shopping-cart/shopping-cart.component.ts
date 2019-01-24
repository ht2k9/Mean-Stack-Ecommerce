import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../shared/shared.service';
import { Product } from '../../products/product.modal';
import { OrderService } from '../../orders/order.service';
import { Order } from '../../orders/order.modal';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
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

    this.orderService.addOrder(values).subscribe(
      (data: Order) => {
        console.log(data);
      }
    );
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
}
