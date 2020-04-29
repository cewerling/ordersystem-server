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







module.exports = router;