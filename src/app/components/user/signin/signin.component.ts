import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../products/product.service';
import { SharedService } from '../../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errorMsg = null;

  constructor(private sharedService: SharedService,
    private router: Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
    const credentials = form.value;
    
    this.sharedService.loginAdmin(credentials).subscribe(
      (data: boolean) => {
        console.log(data)
        if(data)
          this.sharedService.adminLogged = true;
          this.router.navigate(['/']);
        },
      (error) => {
        this.errorMsg = 'Wrong password or username';
      }
    );
  }
}
