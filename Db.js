const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => console.log('postgres db is connected'))
  .catch(err => console.log(err));


// Just have this for database design - so that it gets created, so I can look at it.
// Take these lines out later.
OrderStatus = sequelize.import('./models/orderStatus');


// ***************************
// Relationships
// ***************************

Contact = sequelize.import('./models/contact');
OrderHeader = sequelize.import('./models/orderHeader');
OrderDetail = sequelize.import('./models/orderDetail');
User = sequelize.import('./models/user');

//OrderHeader.belongsTo(Contact);
//Contact.hasMany(OrderHeader);

OrderDetail.belongsTo(OrderHeader);
OrderHeader.hasMany(OrderDetail);

OrderHeader.belongsTo(User);
User.hasMany(OrderHeader);



module.exports = sequelize;