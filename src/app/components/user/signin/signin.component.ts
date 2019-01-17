import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../../shared/database.service';
import { SharedService } from '../../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errorMsg = null;

  constructor(private dataSrv: DatabaseService,
    private sharedSrv: SharedService,
    private router: Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
    const credentials = form.value;
    
    this.dataSrv.loginAdmin(credentials).subscribe(
      (data) => {
        console.log(data);
        if(data['username']){
          this.sharedSrv.currentUser = data;
          this.router.navigate(['/']);
        }
      },
      (error) => {
        this.errorMsg = 'Wrong password or username';
      }
    );
  }
}
