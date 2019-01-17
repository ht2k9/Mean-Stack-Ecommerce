import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories = ['Home', 'Products', 'Orders', 'Shopping Cart', 'Signin'];
  links = ['/', '/products', '/orders/search', '/cart', '/login'];

  constructor() { }

  ngOnInit() {
  }

}
