require('dotenv').config();
var express = require('express');
var app = express();
var user = require('./controllers/usercontroller');    // Add controllers you need
var orders = require('./controllers/orderscontroller');
var sequelize = require('./db');                     // Imports the Sequelize DB (db.js)

sequelize.sync();      // tip: pass in {force: true} for resetting tables

app.use(express.json());
app.use(require('./middleware/headers'));


/********************
 * EXPOSED ROUTES
 ********************/
app.use('/user', user);

/******************************
 * PROTECTED ROUTES (Validated)
 ******************************/
app.use(require('./middleware/validate-session'));
app.use('/orders', orders);


app.listen(3000, function() {                      // Get rid of function later?
    console.log('App is listening on 3000.');
});