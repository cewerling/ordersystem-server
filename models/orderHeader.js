module.exports = function (sequelize, DataTypes) {
    return sequelize.define('orderHeader', {
        orderNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // orderStatusID: {
        //     type: DataTypes.INTEGER
        // },
        orderStatus: {
            type: DataTypes.STRING
        },
        orderPlacedDateTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
//        customerID: {                   // Customer ID who purchased.  This is now being added through belongsTo in db.js
//            type: DataTypes.INTEGER
//        },
        customerName: {
            type: DataTypes.STRING
        },
        // shipToID: {                     // Customer ID being shipped to.
        //     type: DataTypes.INTEGER
        // },
        email: {                        // Contact here and below is for shipTo.
            type: DataTypes.STRING      // If so, is this needed in the orderHeader table,
        },                              // as it is all in the customer table?
        address1: {                     // It might be, as we MAY not be able to uniquely identify
            type: DataTypes.STRING      // the shipTo customer if someone else bought for them and
        },                              // put their contact info in (i.e. phone #).
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
        // countryID: {                    // Future use
        //     type: DataTypes.STRING
        // },
        // mobilePhoneCountryID: {         // Future use
        //     type: DataTypes.INTEGER
        // },
        mobilePhone: {
            type: DataTypes.STRING
        },
        // altPhoneCountryID: {            // Future use
        //     type: DataTypes.INTEGER
        // },
        altPhone: {
            type: DataTypes.STRING
        },
        // hostID: {                           // Party Host whom this order was placed with.
        //     type: DataTypes.INTEGER
        // },
        hostName: {                           // Party Host whom this order was placed with.
            type: DataTypes.STRING
        },
        costSubtotal: {
            type: DataTypes.DECIMAL(10,4)
        },
        // costShipping: {
        //     type: DataTypes.DECIMAL(10,4)
        // },
        // costTax: {
        //     type: DataTypes.DECIMAL(10,4)
        // },
        // costTotal: {
        //     type: DataTypes.DECIMAL(10,4)
        // },
        // payments: {
        //     type: DataTypes.DECIMAL(10,4)
        // },
        // currencyID: {                    // Future use
        //     type: DataTypes.INTEGER
        // },
        updatedBy: {                    // User_ID of the person who last updated this row.
            type: DataTypes.INTEGER
        }
    });
};