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
    Product.updateOne({ _id: req.params.id }, req.body, (err, res) => {
        res.send(req.body);  
        next(); 
    });
});


module.exports = router;