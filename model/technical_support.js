const Sequelize = require("sequelize")

module.exports = function(sequelize) {
    return sequelize.define("technical_supports", {

    problems: {
    type: Sequelize.STRING,

    },
        name:{
        type: Sequelize.STRING,

        },
        phone:{
        type: Sequelize.STRING,
        },
        answer:{
        type:Sequelize.STRING,
        }
    })}

