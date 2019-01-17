import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../shared/database.service';
import { SharedService } from '../../shared/shared.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../Product.modal';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  searchOpen = false;
  constructor(private dataSrv: DatabaseService,
    private route: ActivatedRoute,
    public sharedSrv: SharedService) {}

  ngOnInit() {
    this.route.params.subscribe(
    (params: Params) => {
      this.dataSrv.getProductById(params.id).subscribe((data: Product) =>{
        this.product = data;
      });
    });
  }
}
