require("./config/database");

const port = 3000;

const 
    functions = require('firebase-functions'),
    express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    cookieParser = require("cookie-parser"),
    session = require("cookie-session")

const productRoute = require('./products/product-route'),
    adminRoute = require('./admin/admin-route'),
    orderRoute = require('./orders/order-route');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
    name: 'MyAppName',
    keys: ['very secret key'],
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
}));

// Login
app.use('/admin', adminRoute);

// Products
app.use('/product', productRoute);

// Orders
app.use('/order', orderRoute);

app.listen(port, () =>{
    console.log("app listening to port "+port);
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest(app);