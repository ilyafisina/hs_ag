const express = require("express");
// Подключаем контроллер для базовых запросов
const homeController = require("../controllers/homeController.js");
const homeRouter = express.Router();

homeRouter.get("/news", homeController.news);
homeRouter.get("/about", homeController.about);
homeRouter.get("/", homeController.index);

module.exports = homeRouter;