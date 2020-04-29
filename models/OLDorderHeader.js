module.exports = function (sequelize, DataTypes) {
    return sequelize.define('orderHeader', {
        orderNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'order_number'
        },
        orderStatusID: {
            type: DataTypes.INTEGER,
            field: 'order_status_id'
        },
        orderPlacedDateTime: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'order_placed_datetime'
        },
        customerID: {                   // Customer ID who purchased.
            type: DataTypes.INTEGER,
            field: 'customer_id'
        },
        shipToID: {                     // Customer ID being shipped to.
            type: DataTypes.INTEGER,
            field: 'ship_to_id'
        },
        email: {                        // Contact here and below is for shipTo.
            type: DataTypes.STRING,     // If so, is this needed in the orderHeader table,
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
            type: DataTypes.STRING,
            field: 'postal_code'
        },
        countryID: {                    // Future use
            type: DataTypes.STRING,
            field: 'country_ID'
        },
        mobilePhoneCountryID: {         // Future use
            type: DataTypes.INTEGER,
            field: 'mobile_phone_country_id'
        },
        mobilePhone: {
            type: DataTypes.STRING,
            field: 'mobile_phone'
        },
        altPhoneCountryID: {            // Future use
            type: DataTypes.INTEGER,
            field: 'alt_phone_country_id'
        },
        altPhone: {
            type: DataTypes.STRING,
            field: 'alt_phone'
        },
        hostID: {                           // Party Host whom this order was placed with.
            type: DataTypes.INTEGER,
            field: 'host_id'
        },
        costSubtotal: {
            type: DataTypes.DECIMAL(10,4),
            field: 'cost_subtotal'
        },
        costShipping: {
            type: DataTypes.DECIMAL(10,4),
            field: 'cost_shipping'
        },
        costTax: {
            type: DataTypes.DECIMAL(10,4),
            field: 'cost_tax'
        },
        costTotal: {
            type: DataTypes.DECIMAL(10,4),
            field: 'cost_total'
        },
        payments: {
            type: DataTypes.DECIMAL(10,4),
        },
        currencyID: {                    // Future use
            type: DataTypes.INTEGER,
            field: 'curency_id'
        },
        updatedBy: {                    // User_ID of the person who last updated this row.
            type: DataTypes.INTEGER,
            field: 'updated_by'
        }
    }, {
        createdAt: 'created_at',    // Changes the auto cteated fields to snake_case in the actual DB.
        updatedAt: 'updated_at',
        tableName: 'order_header'   // Changes the table name to snake_case in the actual DB.
        }
    );
};