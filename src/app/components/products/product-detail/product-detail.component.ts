import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { SharedService } from '../../shared/shared.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../product.modal';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  searchOpen = false;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private dataSrv: ProductService,
    public sharedSrv: SharedService) {}

  ngOnInit() {
    this.route.params.subscribe(
    (params: Params) => {
      this.dataSrv.getProductById(params.id).subscribe((data: Product) => {
        this.product = data;
      });
    });
  }

  onAddToCart(){
    this.sharedSrv.addProductToCart(this.product);
    // TODO : replace with animation
    alert("Added To Cart");
  }

  onDeleteProduct(product_id: string){
    this.dataSrv.deleteProduct(product_id).subscribe(
      (data) => {
        if(data['n'] == 1){
          this.router.navigate(['/']);
        }
    });
  }

}
