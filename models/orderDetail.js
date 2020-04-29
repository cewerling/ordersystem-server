module.exports = function (sequelize, DataTypes) {
    return sequelize.define('orderDetail', {
        orderNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sku: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        quantity: {
            type: DataTypes.DECIMAL
        },
        retailPrice: {
            type: DataTypes.DECIMAL(10,4)
        },
        discount: {
            type: DataTypes.DECIMAL(10,4)
        },
        extendedPrice: {
            type: DataTypes.DECIMAL(10,4)
        },
        updatedBy: {                    // User_ID of the person who last updated this row.
            type: DataTypes.INTEGER
        }
    });
};