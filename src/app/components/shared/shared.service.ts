import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/internal/operators/catchError";
import { Subject, throwError } from "rxjs";

import { Product } from "../products/product.modal";

@Injectable()
export class SharedService{
    configUrl = "http://localhost:3000";
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };
      
    adminLogged = false;
    
    maxPrice = 500;
    selectedTags = new Subject<string[]>();
    tags = [
        'Stone', 'Frame', 'Picture', 'Print', 'Gift',
        'Modern', 'Classic', 'Vintage', 'Retro', 'Popular'
    ];
    
    cartItems = [];

    constructor(private http: HttpClient){}

    addProductToCart(product: Product){
        this.cartItems.push(product);
    }

    getCartItems(): Product[]{
        return this.cartItems;
    }

    filterTags(filter: string[]){
        this.selectedTags.next(filter);
    }

    loginAdmin(credentials: any){
        return this.http.post(`${this.configUrl}/admin`, JSON.stringify(credentials), this.httpOptions)
            .pipe(
              catchError(this.handleError)  
            );
    }

    logoutAdmin(){
        return this.http.get(`${this.configUrl}/admin`)
            .pipe(
                catchError(this.handleError)
            );
    }

    public handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };
    
}