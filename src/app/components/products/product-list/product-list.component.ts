import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../../shared/database.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  searchOpen = false;
  constructor(private dataSrv: DatabaseService, public sharedSrv: SharedService) { }

  ngOnInit() {
    this.dataSrv.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

}
