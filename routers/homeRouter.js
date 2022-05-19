const express = require("express");
// Подключаем контроллер для базовых запросов
const Controller = require("../controllers/homeController.js");
const Router = express.Router();


Router.use("/news", Controller.news);
Router.use("/about", Controller.about);
Router.use("/index", Controller.index);
Router.use("/drop", Controller.drob);
Router.use("/kal", Controller.kal);
Router.get("/ts",Controller.ts);
Router.post("/ts",Controller.testing);


module.exports = Router;