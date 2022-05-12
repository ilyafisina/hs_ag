const Sequelize = require("sequelize")
module.exports = function(sequelize) {
    return sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        login: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date_birthday: {
            type: Sequelize.DATE,
            allowNull: false
        },
        phone_number: {
            type: Sequelize.STRING,
            allowNull:false
        },
        admin: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    });
};

