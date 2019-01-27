export class Product {
    constructor (
            public title: string,
            public description: string,
            public mainImage: string,
            public price: number,
            public tags: string[],
            public sizes: [],
            public colors: [],
            public images: [] 
        ){}
}