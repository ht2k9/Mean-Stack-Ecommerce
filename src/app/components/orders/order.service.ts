import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { ProductService } from "../products/product.service";
import { Order } from "./order.modal";

@Injectable()
export class OrderService{
    public selectedOrder : Order;
    
    constructor(private http: HttpClient,
        private databaseService: ProductService){}

    getOrders() {
        return this.http.get(`${this.databaseService.configUrl}/order`)
            .pipe(
                catchError(this.databaseService.handleError)  
            );
    }

    deleteOrder(id: string) {
        return this.http.delete(`${this.databaseService.configUrl}/order/${id}`)
    }

    getOrderByID(id: String){
        return this.http.get(`${this.databaseService.configUrl}/order/${id}`, this.databaseService.httpOptions)
            .pipe(
                catchError(this.databaseService.handleError)  
            );
    }

    addOrder(values: Order){
        return this.http.post<Order>(`${this.databaseService.configUrl}/order`, JSON.stringify(values), this.databaseService.httpOptions)
            .pipe(
                catchError(this.databaseService.handleError)
            );
    }

    editOrder(values: any, id: number){
        return this.http.put<Order>(`${this.databaseService.configUrl}/order/${id}`, JSON.stringify(values), this.databaseService.httpOptions)
            .pipe(
                catchError(this.databaseService.handleError)
            );
    }
    
    formatDate(oldDate: Date){
        const date = new Date(oldDate);
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }

    formatPhone(phone: string){
        let ariaCode = phone.slice(0, 2);
        let part1 = phone.slice(2, 6);
        let part2 = phone.slice(6, 9);

        return (`0${ariaCode}-${part1}-${part2}`);
    }
}