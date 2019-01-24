import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCheckboxModule, MatSliderModule, MatSidenavModule, MatDividerModule } from '@angular/material';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ShoppingCartComponent } from './components/user/shopping-cart/shopping-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './components/shared/shared.service';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductSearchComponent } from './components/products/product-search/product-search.component';
import { DatabaseService } from './components/shared/database.service';
import { ProductAddComponent } from './components/products/product-add/product-add.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrderTrackComponent } from './components/orders/order-track/order-track.component';
import { OrderService } from './components/orders/order.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductSearchComponent,
    SigninComponent,
    ProductAddComponent,
    NavbarComponent,
    OrderDetailsComponent,
    OrderListComponent,
    OrderTrackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    MatCheckboxModule,MatSliderModule,MatIconModule,MatSidenavModule,MatDividerModule
  ],
  providers: [SharedService, DatabaseService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); // Or whatever path you placed mdi.svg at
  }
}
