import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAdmin = false;
  private subscription = new Subscription();

  constructor(private sharedService: SharedService,
    private router: Router) { }

  ngOnInit() {
    this.subscription.add(this.sharedService.adminStateChanged.subscribe(data => {
      this.isAdmin = data;
    }));
  }

  onSignOut(){
    this.subscription.add(this.sharedService.logoutAdmin().subscribe(
      (data: boolean) => {
        this.sharedService.adminState(data);
        this.router.navigate(['/']);
      }
    ));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
