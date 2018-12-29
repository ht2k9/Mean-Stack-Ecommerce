import { Component } from '@angular/core';
import { SharedService } from './components/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLeft = false;
  showRight = false;
  constructor(public sharedSrv: SharedService){}

  onOpenSidebar(){
    this.sharedSrv.sidebarOpen = !this.sharedSrv.sidebarOpen;
  }
}
