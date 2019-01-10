export class Product {
    constructor (
            public product_id: number,
            public title: string,
            public description: string,
            public mainImage: string,
            public price: number,
            public sizes: [],
            public colors: [],
            public images: [] 
        ){}
}