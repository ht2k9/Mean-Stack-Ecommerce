import { Component } from '@angular/core';
import { trigger, state, style, transition, animate  } from '@angular/animations';
import { SharedService } from './components/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('addItem', [
      state('default', style({
        opacity: 1
      })),
      state('onadd', style({})),
      transition('default <=> onadd', animate('1s'))
    ]),
    trigger('navbar', [
      state('close', style({
        transform: 'translateY(-65px)'
      })),
      state('open', style({
        transform: 'translateY(0px)'
      })),
      transition('open <=> close', animate('0.5s'))  
    ])
  ]
})
export class AppComponent {
  categories = ['Home', 'Products', 'Orders', 'Shopping Cart', 'Signin'];
  links = ['/', '/products', '/orders/search', '/cart', '/login'];

  navbarShow = false;

  currentState = 'close';

  constructor(private sharedService: SharedService){}

  onChangeState(){
    this.currentState == 'open' ? this.currentState = 'close': this.currentState = 'open';
    // this.sharedService.changeState(this.currentState);
  }
}
