'use strict';
module.exports = (sequelize, DataTypes) => {
  const testFirstName = sequelize.define('testFirstName', {
    firstName: DataTypes.STRING
  }, {});
  testFirstName.associate = function(models) {
    // associations can be defined here
  };
  return testFirstName;
};