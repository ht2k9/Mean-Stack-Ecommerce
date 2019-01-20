import { Injectable } from "@angular/core";
import { Product } from "../products/Product.modal";


Injectable()
export class SharedService{
    public sidebarOpen = false;
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