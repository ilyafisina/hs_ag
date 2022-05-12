const express = require("express");
// Подключаем контроллер для пользователей
const articleController = require("../controllers/articleController");
const articleRouter = express.Router();

articleRouter.use("/drob", articleController.drob);
articleRouter.use("/kal", articleController.kal);
articleRouter.use("/news", articleController.news);

module.exports = articleRouter;

