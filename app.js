require('dotenv').config();
var express = require('express');
var app = express();
var user = require('./controllers/usercontroller');    // Add controllers you need
var orders = require('./controllers/orderscontroller');
var sequelize = require('./Db');                     // Imports the Sequelize DB (db.js)

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


// app.listen(3000, function() {
app.listen(process.env.PORT, function() {
        console.log(`Server is listening on port ${process.env.PORT}.`);
        // console.log('App is listening on 3000.');
});