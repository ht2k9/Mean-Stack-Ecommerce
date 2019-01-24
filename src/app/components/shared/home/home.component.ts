import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = ['https://picsum.photos/900/500/?image=374',
   'https://picsum.photos/900/500/?image=376',
  'https://picsum.photos/900/500/?image=378'];
  constructor(public sharedSrv: SharedService,
      private dataSrv: DatabaseService) { }

  ngOnInit() {
    this.dataSrv.isLoggedIn().subscribe(
      (data: boolean) => {
        console.log(data);
        this.sharedSrv.adminLogged = data;
    });
  }

}
