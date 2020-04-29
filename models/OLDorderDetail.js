module.exports = function (sequelize, DataTypes) {
    return sequelize.define('orderDetail', {
        orderNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'order_number'
        },
        sku: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        quantity: {
            type: DataTypes.DECIMAL,
        },
        retailPrice: {
            type: DataTypes.DECIMAL(10,4),
            field: 'retail_price'
        },
        discount: {
            type: DataTypes.DECIMAL(10,4),
        },
        extendedPrice: {
            type: DataTypes.DECIMAL(10,4),
            field: 'extended_price'
        },
        updatedBy: {                    // User_ID of the person who last updated this row.
            type: DataTypes.INTEGER,
            field: 'updated_by'
        }
    }, {
        createdAt: 'created_at',    // Changes the auto cteated fields to snake_case in the actual DB.
        updatedAt: 'updated_at',
        tableName: 'order_detail'   // Changes the table name to snake_case in the actual DB.
        }
    );
};