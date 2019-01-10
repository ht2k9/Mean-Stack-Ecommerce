const port = 3000;

const functions = require('firebase-functions'),
    express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors");

const productList = require("./products/product");
const shoppingCart = require("./users/shopping-cart");

app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// User
// app.use('/user', shoppingCart);

// Products
app.use('/product', productList);

app.listen(port, () =>{
    console.log("app listening to port "+port);
});



// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest(app);