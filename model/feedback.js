const Sequelize = require("sequelize")

module.exports = function(sequelize) {
    return sequelize.define("feedback",  {
        time_of_placement: {
            type: Sequelize.DATE,
            allowNull: false
        },
        information: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })}