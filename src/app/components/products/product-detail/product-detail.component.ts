import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../shared/database.service';
import { SharedService } from '../../shared/shared.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  searchOpen = false;
  constructor(private dataSrv: DatabaseService,
    private route: ActivatedRoute,
    public sharedSrv: SharedService
     ) { }

  ngOnInit() {
    this.route.params.subscribe(
    (params: Params) => {
      this.dataSrv.getProductById(params.id).subscribe((data) =>{
        this.product = data;
      });
    });
  }
}
