const express = require("express");
const router = express.Router();

products = [
    {
        product_id: 1,
        title: 'Stone',
        description: '',
        mainImage: '',
        price: 50,
        sizes: ['30x30', '40x40', '10x15'],
        colors: ['#64ec9a', '#64ec9a'],
        images: ['red', 'blue']
    },
    {
        product_id: 2,
        title: 'Stone',
        description: '',
        mainImage: '',
        price: 50,
        sizes: ['30x30', '40x40', '10x15'],
        colors: ['red', 'blue'],
        images: ['red', 'blue']
    },
    {
        product_id: 3,
        title: 'Stone',
        description: '',
        mainImage: '',
        price: 50,
        sizes: ['30x30', '40x40', '10x15'],
        colors: ['#64ec9a', '#64ec9a'],
        images: ['red', 'blue']
    },
    {
        product_id: 4,
        title: 'Stone',
        description: '',
        mainImage: '',
        price: 50,
        sizes: ['30x30', '40x40', '10x15'],
        colors: ['red', 'blue'],
        images: ['red', 'blue']
    },
    {
        product_id: 5,
        title: 'Stone',
        description: '',
        mainImage: '',
        price: 50,
        sizes: ['30x30', '40x40', '10x15'],
        colors: ['red', 'blue'],
        images: ['red', 'blue']
    },
    {
        product_id: 6,
        title: 'Stone',
        description: '',
        mainImage: '',
        price: 50,
        sizes: ['30x30', '40x40', '10x15'],
        colors: ['red', 'blue'],
        images: ['red', 'blue']
    }
];

router.get("/", (req, res, next) => {
    res.send(products); 
    next();
});

router.post("/", (req, res, next) => {
    res.send(req.body);
    next();
});

router.get("/:id", (req, res, next) => {
    products.forEach(product => {
        if(product.product_id == req.params.id){
            res.send(product);
        }
    });
    next();
});

router.put("/:id", (req, res, next) => {
    res.send(req.body);  
    next(); 
});


module.exports = router;