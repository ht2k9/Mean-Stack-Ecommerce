const router = require('express').Router();
const Order = require('./order-model');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'photofactory96@gmail.com',
      pass: 'kashkoosh'
    }
  });

router.get('/', (req, res, next) => {
    Order.find((err, result) => {
        if(err) throw err;
        res.send(result);
        next();
    })
});

router.post('/', (req, res, next) => { 
    let order = new Order(req.body);
    order.save((err, resultedOrder) => {
        if(err) throw err;
        if(resultedOrder.costumer.email){           
            const mailOptions = {
                from: 'photofactory96@gmail.com',
                to: resultedOrder.costumer.email,
                subject: 'Your Order From PhotoFactory',
                text: `Hello ${resultedOrder.costumer.name}, Your order from PhotoFactory is now bending,
                for more information please enter the order ${resultedOrder._id} in our website`
            };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                    console.log('Email sent:' + info.response)
                }
              });
        }

        res.send(resultedOrder);
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
