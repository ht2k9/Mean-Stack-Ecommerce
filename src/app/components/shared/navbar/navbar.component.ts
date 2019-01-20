import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sharedSrv: SharedService, private dataSrv: DatabaseService, private router: Router) { }

  ngOnInit() {
  }

  onSignOut(){
    this.dataSrv.logoutAdmin().subscribe(
      (data) => {
        if(data){
          this.sharedSrv.adminLogged = data['user'];
          this.router.navigate(['/']);
        }
      }
    );
  }
}
