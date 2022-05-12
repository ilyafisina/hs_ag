const Sequelize = require("sequelize")

module.exports = function(sequelize) {
    return sequelize.define("technical_supports", {
    problems: {
    type: Sequelize.STRING,
        allowNull:false
    },
    time_of_appeal: {
    type: Sequelize.DATE,
        allowNull: false
    },
    answer: {
        type: Sequelize.STRING,
        allowNull: false
    }
    })}

