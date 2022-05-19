const express = require("express");
const db = require("../config/db.config");
const bodyParser = require("body-parser");
const cors = require("cors");
const hbs = require('hbs');
const app = express();
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", "./views");

app.use(express.static('./views/styles'));


app.get("/", (req, res) => {
  res.json({ message: "Домашняя страница. Бэк работает"
 });
});
const PORT = process.env.PORT || 3000;
db.sequelize
    .sync()
    .then(result => {
        console.log();
    })
    .catch(err => {
        console.log(err);
    })

// Подключаем созданные роутеры
const homeRouter = require('../routers/homeRouter')

app.use("/", homeRouter)
app.use(express.static("views/images"));  // чтобы работали изображения на сайте

hbs.registerPartials('./views/partials')

//А это 404 ошибка
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

