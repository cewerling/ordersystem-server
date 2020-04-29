module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'user_name'
        },
        passwordHash: {
            type: DataTypes.STRING,
            field: 'password_hash'
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'first_name'
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'last_name'
        },
        email: {
            type: DataTypes.STRING
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
            type: DataTypes.STRING,
            field: 'postal_code'
        },
        countryID: {
            type: DataTypes.STRING,
            field: 'country_id'
        },
        timeZone: {
            type: DataTypes.STRING,
            field: 'time_zone'
        },
        mobilePhoneCountryID: {
            type: DataTypes.INTEGER,
            field: 'mobile_phone_country_id'
        },
        mobilePhone: {
            type: DataTypes.STRING,
            field: 'mobile_phone'
        },
        salesUserID: {
            type: DataTypes.INTEGER,
            field: 'sales_user_id'
        },
        updatedBy: {                    // User_ID of the person who last updated this row.
            type: DataTypes.INTEGER,
            field: 'updated_by'
        }
    }, {
        createdAt: 'created_at',    // Changes the auto cteated fields to snake_case in the actual DB.
        updatedAt: 'updated_at'
        }
    );
};