import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  types = ['Stone', 'Frame', 'Picture', 'Print', 'Gift'];
  styles = ['Modern', 'Classic', 'Vintage', 'Retro'];

  constructor(public sharedSrv: SharedService) { }

  ngOnInit() {
  }

}
