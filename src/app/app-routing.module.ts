import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './components/user/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductAddComponent } from './components/products/product-add/product-add.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrderTrackComponent } from './components/orders/order-track/order-track.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'products', children:[
    {path: '', component: ProductListComponent},
    {path: 'add', component: ProductAddComponent},
    {path: ':id', children:[
      {path: '', component: ProductDetailComponent},
      {path: 'edit', component: ProductAddComponent},
    ]},
  ]
},
{path: 'login', component: SigninComponent},
{path: 'orders', children:[
    {path: '', component: OrderListComponent},
    {path: 'track', component: OrderTrackComponent},
    {path: ':id', component: OrderDetailsComponent},
  ]
},
{path: 'cart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
