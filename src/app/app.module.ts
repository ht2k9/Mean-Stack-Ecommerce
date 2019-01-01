import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCheckboxModule, MatSliderModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ShoppingCartComponent } from './components/user/shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from './components/shared/shared.service';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductSearchComponent } from './components/products/product-search/product-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductSearchComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatCheckboxModule,MatSliderModule,MatIconModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {}
