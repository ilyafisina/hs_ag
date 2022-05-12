const Sequelize = require("sequelize")

module.exports = function (sequelize) {
    return sequelize.define("content", {
        information: {
            type: Sequelize.STRING, allowNull: false
        }, time_of_placement: {
            type: Sequelize.DATE, allowNull: false
        }, type: {
            type: Sequelize.STRING, allowNull: false
        }, posted_it: {
            type: Sequelize.STRING, allowNull: false
        }, content_type: {
            type: Sequelize.STRING, allowNull: false
        }
    })
}