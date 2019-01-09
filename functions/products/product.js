const express = require("express");
const router = express.Router();

products = [
    {
        product_id: 1,
        title: 'Stone',
        size: ['30x30', '40x40', '10x15'],
        description: '',
        colors: ['red', 'blue'],
        price: 50
    },
    {
        product_id: 2,
        title: 'Stone',
        size: ['30x30', '40x40', '10x15'],
        description: '',
        colors: ['red', 'blue'],
        price: 15
    },
    {
        product_id: 3,
        title: 'Stone',
        size: ['30x30', '40x40', '10x15'],
        description: '',
        colors: ['red', 'blue'],
        price: 100
    },
    {
        product_id: 4,
        title: 'Stone',
        size: ['30x30', '40x40', '10x15'],
        description: '',
        colors: ['red', 'blue'],
        price: 50
    },
    {
        product_id: 5,
        title: 'Stone',
        size: ['30x30', '40x40', '10x15'],
        description: '',
        colors: ['red', 'blue'],
        price: 15
    },
    {
        product_id: 6,
        title: 'Stone',
        size: ['30x30', '40x40', '10x15'],
        description: '',
        colors: ['red', 'blue'],
        price: 100
    }
];

router.get("/list", (req, res, next) => {
    res.send(products); 
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


module.exports = router;