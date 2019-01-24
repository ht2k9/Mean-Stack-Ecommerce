import { Injectable } from "@angular/core";
import { Product } from "../products/product.modal";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable()
export class SharedService{
    public adminLogged: boolean;
    
    cartItems = [];

    constructor(){}

    addProductToCart(product: Product){
        this.cartItems.push(product);
    }

    getCartItems(): Product[]{
        return this.cartItems;
    }
}