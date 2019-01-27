import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin = false;
  constructor(private sharedService: SharedService,
    private router: Router) { }

  ngOnInit() {
    this.isAdmin = this.sharedService.adminLogged;
  }

  onSignOut(){
    this.sharedService.logoutAdmin().subscribe(
      (data) => {
        if(data){
          this.sharedService.adminLogged = data['user'];
          this.router.navigate(['/']);
        }
      }
    );
  }
}
