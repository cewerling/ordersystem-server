module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        userName: {
            type: DataTypes.STRING
        },
        passwordHash: {
            type: DataTypes.STRING
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address1: {
            type: DataTypes.STRING
        },
        address2: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        region: {
            type: DataTypes.STRING
        },
        postalCode: {
            type: DataTypes.STRING
        },
        countryID: {
            type: DataTypes.STRING
        },
        timeZone: {
            type: DataTypes.STRING
        },
        mobilePhoneCountryID: {
            type: DataTypes.INTEGER
        },
        mobilePhone: {
            type: DataTypes.STRING
        },
        salesUserID: {
            type: DataTypes.INTEGER
        },
        updatedBy: {                  // User_ID of the person who last updated this row.
            type: DataTypes.INTEGER
        }
    });
};