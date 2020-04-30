require('dotenv').config();      // Includes the .env file for reference in this file
var router = require('express').Router();
var sequelize = require('../db');
var OrderHeader = sequelize.import('../models/orderHeader');
const validateSession = require('../middleware/validate-session');

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');



/**************************************************
* GET All Orders for the Signed In User/Salesperson
***************************************************/

router.get('/', validateSession, (req, res) => {

    console.log('*************Getting the orders.************');
    console.log('')
    
    OrderHeader.findAll({
        where: {userId: req.user.salesUserID}
        // where: {owner: req.body.owner}
    })
      .then(orders => res.status(200).json(orders))
      .catch(err => res.status(500).json({error:err}))

});




/****************************************
* CREATE Order
****************************************/

router.post('/', validateSession, (req, res) => {

    const orderFromRequest = {
        "customerName": req.body.order.customerName,
        "orderNumber": req.body.order.orderNumber,
        "orderPlacedDateTime": req.body.order.orderPlacedDateTime,
        "mobilePhone": req.body.order.mobilePhone,
        "email": req.body.order.email,
        "hostName": req.body.order.hostName,
        "address1": req.body.order.address1,
        "city": req.body.order.city,
        "region": req.body.order.region,
        "postalCode": req.body.order.postalCode,
        "orderStatus": req.body.order.orderStatus,
        "costSubtotal": req.body.order.costSubtotal,
        "userid": req.user.salesUserID
    }

    console.log('******** Order to Create: ********');
    console.dir(orderFromRequest);

    OrderHeader.create(orderFromRequest)
      .then(log => {res.status(200).json(log);})
      .catch(err => res.json(req.errors))

});




/****************************************
* UPDATE Order
****************************************/

router.put('/:id', validateSession, (req, res) => {

    const orderFromRequest = {
        "customerName": req.body.order.customerName,
        "orderNumber": req.body.order.orderNumber,
        "orderPlacedDateTime": req.body.order.orderPlacedDateTime,
        "mobilePhone": req.body.order.mobilePhone,
        "email": req.body.order.email,
        "hostName": req.body.order.hostName,
        "address1": req.body.order.address1,
        "city": req.body.order.city,
        "region": req.body.order.region,
        "postalCode": req.body.order.postalCode,
        "orderStatus": req.body.order.orderStatus,
        "costSubtotal": req.body.order.costSubtotal,
    }

    OrderHeader.update(orderFromRequest, {where: {userId: req.user.salesUserID, id: req.params.id}})
      .then(log => {res.status(200).json(log);})
      .catch(err => res.json(req.errors))

});




/****************************************
* Delete Individual Orders
****************************************/

router.delete('/:id', validateSession, (req, res) => {

    OrderHeader.destroy({where: {userId: req.user.salesUserID, id: req.params.id}})
      .then(log => {res.status(200).json(log);})
      .catch(err => res.json(req.errors))

});




module.exports = router;