require('dotenv').config();     // Includes the .env file for reference in this file
var router = require('express').Router();
var sequelize = require('../Db');
var User = sequelize.import('../models/user');

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

/****************************************
* Create User Endpoint
****************************************/

router.post('/create', function(req, res) {

    User
      .create({
          firstName: req.body.user.firstName,
          lastName: req.body.user.lastName,
          email: req.body.user.email,
          passwordHash: bcrypt.hashSync(req.body.user.password, 10)

      })
      .then(
        function createSuccess(user) {
           var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
           res.json({
            user: user,
            message: 'created',
            sessionToken: token
        });
     }
   );
});


/****************************************
* User Signin
****************************************/

router.post('/signin', function(req, res) {

 User
 .findOne({
     where: {email: req.body.user.email}
 })

 .then(
     function(user) {
         if (user) {
             bcrypt.compare(req.body.user.password, user.passwordHash, function (err, matches) {
                 if (matches) {
                     var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                     res.json({
                         user: user,
                         message: "successfully authenticated",
                         sessionToken: token
                     })
                 } else {
                     res.status(502).send({ error: "you failed, yo"});
                 }
             });
         } else {
             res.status(500).send({ error: "failed to authenticate" });
         }
     },
     function (err) {
         res.status(501).send({error: "you failed, yo"});
     }
 );
});


module.exports = router;