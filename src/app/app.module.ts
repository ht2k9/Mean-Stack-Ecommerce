import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedService } from './components/shared/shared.service';
import { ProductService } from './components/products/product.service';
import { OrderService } from './components/orders/order.service';
import { SharedModule } from './components/shared/shared.module';
import { ProductsModule } from './components/products/products.module';
import { OrderModule } from './components/orders/order.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MatIconModule, MatIconRegistry } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    NgbModule,
    OrderModule,
    SharedModule,
    ProductsModule,
    MatIconModule
  ],
  providers: [SharedService, ProductService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); // Or whatever path you placed mdi.svg at
  }
}
