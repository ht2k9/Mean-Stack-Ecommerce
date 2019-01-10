import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './components/user/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductAddComponent } from './components/products/product-add/product-add.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  { path: 'product', children:[
    {path: '', component: ProductListComponent},
    {path: 'add', component: ProductAddComponent},
    {path: 'edit/:id', component: ProductAddComponent},
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
