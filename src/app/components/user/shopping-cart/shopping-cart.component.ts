import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../shared/shared.service';
import { Product } from '../../products/Product.modal';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: Product[];

  constructor(private sharedSrv: SharedService) { }

  ngOnInit() {
    this.products = this.sharedSrv.getCartItems();
  }

  onOrderSubmit(form: NgForm){

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
