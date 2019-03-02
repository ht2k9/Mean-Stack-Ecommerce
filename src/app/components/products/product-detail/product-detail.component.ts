import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs/internal/Subscription';

import { Product } from '../product.modal';
import { SharedService } from '../../shared/shared.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  product: Product;
  searchOpen = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    public sharedSrv: SharedService) {}

  ngOnInit() {
    this.route.params.subscribe(
    (params: Params) => {
      this.subscription.add(this.productService.getProductById(params.id).subscribe((data: Product) => {
        this.product = data;
        this.productService.selectedProduct = data;
      }));
    });
  }

  onAddToCart(){
    this.sharedSrv.addProductToCart(this.product);
    // TODO : replace with animation
    alert("Added To Cart");
  }

  onDeleteProduct(product_id: string){
    this.productService.deleteProduct(product_id).subscribe(
      (data) => {
        if(data){
          this.router.navigate(['/']);
        }
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
