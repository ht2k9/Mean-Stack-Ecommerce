import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DatabaseService {
    configUrl = "http://localhost:3000/product/";
    products : any;

    constructor(private http: HttpClient){}

    getProducts() {
        return this.http.get(this.configUrl+"list");
    }

    getProductById(id: number){
        return this.http.get(this.configUrl+`${id}`);
    }
}