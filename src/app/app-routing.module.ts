import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './components/user/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductAddComponent } from './components/products/product-add/product-add.component';
import { SigninComponent } from './components/user/signin/signin.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'products', children:[
    {path: '', component: ProductListComponent},
    {path: 'add', component: ProductAddComponent},
    {path: 'edit/:id', component: ProductAddComponent},
    {path: ':id', component: ProductDetailComponent},
  ]
},
{path: 'login', component: SigninComponent},
{path: 'orders', children:[
    {path: '', component: ProductListComponent},
    {path: 'search', component: ProductListComponent},
    {path: ':id', component: ProductListComponent},
  ]
},
{path: 'cart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
