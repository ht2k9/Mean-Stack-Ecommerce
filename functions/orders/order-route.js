const router = require('express').Router();
const Order = require('./order-model');

router.get('/', (req, res, next) => {
    Order.find((err, result) => {
        if(err) throw err;
        res.send(result);
        next();
    })
});

router.post('/', (req, res, next) => {
    let order = new Order(req.body);
    order.save((err) => {
        if(err) throw err;
        res.send(order);
        next();
    })
});

router.get('/:id', (req, res, next) => {
    Order.findById(req.params.id, (err, order) => {
        if(err) throw err;
        if(order){
            res.send(order);
        } else {
            res.send({message: 'No Order Found'})
        }
        next();
    })
});

router.put('/:id', (req, res, next) => {
    Order.findOneAndUpdate({_id: req.params.id}, req.body, (err, result) => {
        if(err) throw err;
        res.send(result);
        next();
    });
});



router.delete('/:id', (req, res, next) => {
    Order.findByIdAndDelete(req.params.id, (err, result) => {
        if(err) throw err;
        res.send(result);
        next();
    });
});

module.exports = router;
