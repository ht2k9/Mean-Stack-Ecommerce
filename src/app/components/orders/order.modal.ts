import { Product } from "../products/Product.modal";

export class Order{
    constructor(
        public costumer: {name: string, phone: number, email: string, address: string},
        public status: string,
        public date_required: Date,
        public products: Product[]
        ){}  
}