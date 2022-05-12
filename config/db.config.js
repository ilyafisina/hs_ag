const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("hg_ag", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});

const db = {}
db.sequelize = sequelize;
const userDefiner = require("../model/users")
db.users = userDefiner(sequelize)
// db.user = require("../models/user")
const contentDefiner = require("../model/content")
db.content = contentDefiner(sequelize)
const feedbackDefiner = require("../model/feedback")
db.feedback = feedbackDefiner(sequelize)
const tsDefiner = require("../model/technical_support")
db.technical_support = tsDefiner(sequelize)

db.users.hasMany(db.content);
db.users.hasMany(db.feedback);
db.users.hasMany(db.technical_support);


db.ROLES = ["user", "admin"]

module.exports = db;
