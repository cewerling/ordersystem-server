module.exports = function (sequelize, DataTypes) {
    return sequelize.define('orderStatus', {
        sequence: {                     // The sequential order of this status.
            type: DataTypes.INTEGER,    // These should be spread out, perhaps by 100s to allow to add in-between.
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        updatedBy: {                    // User_ID of the person who last updated this row.
            type: DataTypes.INTEGER,
            field: 'updated_by'
        }
    }, {
        createdAt: 'created_at',    // Changes the auto cteated fields to snake_case in the actual DB.
        updatedAt: 'updated_at',
        tableName: 'order_status'   // Changes the table name to snake_case in the actual DB.
        }
    );
};