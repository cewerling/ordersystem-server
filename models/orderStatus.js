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
            type: DataTypes.INTEGER
        }
    });
};