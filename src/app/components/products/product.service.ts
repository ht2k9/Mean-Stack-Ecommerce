import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";

import { catchError } from "rxjs/operators";
import { throwError } from "rxjs/internal/observable/throwError";

import { Product } from "./product.modal";

@Injectable()
export class ProductService {
    configUrl = "http://localhost:3000";
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };

    products: Product[];
    selectedProduct: Product;

    constructor(private http: HttpClient){}

    getProducts() {
        return this.http.get(`${this.configUrl}/product`)
            .pipe(
                catchError(this.handleError)  
            );
    }

    deleteProduct(id: string) {
        return this.http.delete(`${this.configUrl}/product/${id}`)
    }

    getProductById(id: number){
        return this.http.get(`${this.configUrl}/product/${id}`)
            .pipe(
                catchError(this.handleError)  
            );
    }

    addProduct(values: Product){
        return this.http.post<Product>(`${this.configUrl}/product`, JSON.stringify(values), this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    editProduct(values: Product, id: string){
        return this.http.put<Product>(`${this.configUrl}/product/${id}`, JSON.stringify(values), this.httpOptions)
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