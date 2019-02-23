const router = require("express").Router();
const Product = require("./product-model");

router.get("/", (req, res, next) => {
    Product.find(function (err, products) {
        if (err) throw err;
        res.send(products);
        next();
      });
});

router.post("/", (req, res, next) => {
    const product = new Product(req.body);
    product.save((err)=>{
        if(err) throw err;
        console.log(product);
        res.send(product);
        next();
    });   
});

router.get("/:id", (req, res, next) => {
    Product.findById(req.params.id, (err, product) => {
        if(err) throw err;
        res.send(product);
        next();
    });
});

router.put("/:id", (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        res.send(req.body);  
        next(); 
    });
});

router.delete("/:id", (req, res, next) => {
    Product.findByIdAndDelete(req.params.id, (err, result) => {
        if(err) throw err;
        res.send(result)
        next();
    });
});

module.exports = router;