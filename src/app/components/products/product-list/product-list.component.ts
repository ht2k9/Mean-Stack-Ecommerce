import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs';

import { ProductService } from '../product.service';
import { Product } from '../product.modal';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() showSearch = true;

  products: Product[];
  shownProducts: Product[];
  filteredProducts: Product[];
  
  private subscription = new Subscription();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.shownProducts = this.filteredProducts = this.products = [];

    this.subscription.add(this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.filteredProducts = this.products = [...data];
        
        if(!this.showSearch){
          this.searchProducts({tags: ['Popular'], maxPrice: 1000})
        }

        this.productsPerPage(0);
      })
    );
  }
  
  searchProducts({tags, maxPrice}){
    this.filteredProducts = [];
    this.products.forEach(product => {
      product.tags.forEach(tag => {
        if(tags.includes(tag) &&
          product.price <= maxPrice &&
          !this.filteredProducts.includes(product)){
            this.filteredProducts.push(product);
        }
      })
    });

    this.productsPerPage(0);
  }

  productsPerPage($event: number){
    this.shownProducts = [];
    for(let i = $event; i < $event+6; i++){
      if(this.filteredProducts[i])
        this.shownProducts.push(this.filteredProducts[i]);
    }
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
