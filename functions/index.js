require("./config/database");

const port = 3000;

const 
    functions = require('firebase-functions'),
    express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors");

const productRoute = require("./products/product-route");
const adminRoute = require("./users/admin/admin-route");


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(require("express-session")({
    secret: "PhotoFactory e-commerce admin",
    resave: false,
    saveUninitialized: false
}));

// Login logic
app.use('/signadmin', adminRoute);

// Products Logic
app.use('/product', productRoute);

app.listen(port, () =>{
    console.log("app listening to port "+port);
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest(app);