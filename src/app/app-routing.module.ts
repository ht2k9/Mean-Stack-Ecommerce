import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './components/user/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  { path: 'products', children:[
    {path: 'list', component: ShoppingCartComponent},
    {path: ':id', component: ProductDetailComponent},
  ]
},
  { path: 'user', children:[
      {path: 'shoppingcart', component: ShoppingCartComponent},
      {path: 'orders', component: ShoppingCartComponent},
      {path: 'profile', component: ShoppingCartComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
